import React, { useEffect } from "react";
import { Spin, Col, Popover, Empty, Modal, Button } from "antd";
import moment from 'moment';
import { get } from 'lodash';
import { nameLogo } from "../../../utils";
import { StyledNameLogo, StyledListAction, StyledAction } from "../../../components/styled";
import { StyledDetail } from "../styledStudent";
import EditStudent from "./editStudent";
import Paiement from "./addPaiement"

export default function DetailStudent({ layout, students, setEmailStudentDetail, deleteStudent, setDateStudentEdit }) {
    const { confirm } = Modal;

    const {
        detail: { loading, student }
    } = students;
    const { data } = students

    const email = (data !== null) ? data.result[0].email :null
    console.log(email);
    useEffect(() => {
        setEmailStudentDetail(email)
    }, [data])

    function showDeleteConfirm(actif) {
        const { firstName, lastName, email, _id } = actif;
        confirm({
            title: 'Are you sure delete this user?',
            content: (
                <React.Fragment>
                    <p style={{ marginBottom: "0px" }}> <b> {`${lastName} ${firstName}`} </b> </p>
                    <p> {email} </p>
                </React.Fragment>
            ),
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteStudent(_id);
            }
        });
    }

    function dataEditStudent(actif) {
        setDateStudentEdit(actif);
    }
    function ActionPaiement(connect, actif) {
        const { accountConnect, emailConnect } = connect;
        const { email, typeAccount } = actif;
        console.log(accountConnect);
        if (typeAccount !== 'User') {
            if (emailConnect !== email) {
                return (
                    <StyledListAction style={{textAlign: "center",float:"left",top: "0",left: "0",position: "absolute" }}>
                        <li onClick={() => dataEditStudent(actif)}> <a><Paiement/></a></li>
                    </StyledListAction>
                )
            }
        }
        return null;
    }
    function Actions(connect, actif) {
        const { accountConnect, emailConnect } = connect;
        const { email, typeAccount } = actif;
        if (accountConnect === 'Admin' && typeAccount !== 'Admin') {
            if (emailConnect !== email) {
                return (
                    <Popover
                        placement="bottom"
                        content={<StyledListAction>
                            <li onClick={() => showDeleteConfirm(actif)}> <i className="icon fas fa-trash-alt" /> Delete </li>
                            <li onClick={() => dataEditStudent(actif)}> <i className="icon fas fa-user-edit" /> <EditStudent /></li>
                        </StyledListAction>}
                        trigger="click"
                    >
                        <StyledAction className="popver-detail" > ... </StyledAction>
                    </Popover>
                )
            }
        }
        return null;
    }

    if (student) {
        const { result: { firstName, lastName, gender, phone, address, dateCreationAccount, email }, result } = student;
        const { login } = layout;
        const dataActif = {
            ...result
        };

        const dataSource = result !== null ? result.section : [];
        const { section } = dataSource
        const dataSet = dataSource !== null ? dataSource.classId : [];
        const { schoolLevelId: { level } } = dataSet

        const dataConnect = {
            accountConnect: login.user.typeAccount,
            emailConnect: login.user.email
        }


        return (
            <StyledDetail gutter={24}>
                <Col xs={24} className="logo-detail">
                {ActionPaiement(dataConnect, dataActif)}
                    <StyledNameLogo
                        // gendre={gendre}
                        width="120px"
                        heigth="120px"
                        size="50px"
                        bottom="-22px"
                    >
                        <b>{nameLogo(lastName, firstName)}</b>
                    </StyledNameLogo>
                    {
                        Actions(dataConnect, dataActif)
                    }
                </Col>
                <Col xs={24} className="description" >
                    <p> Name : <span > {`${lastName} ${firstName}`} </span> </p>
                    <p> Email : <span> {email} </span> </p>
                    <p> Phone : <span> {phone} </span> </p>
                    <p> Address : <span> {address} </span> </p>
                    <p> Date Creation Account : <span> {moment(dateCreationAccount).format("DD/MMMM/YYYY")} </span> </p>
                    <p> Gendre : <span> {gender} </span> </p>
                    <p> Class : <span> {dataSet.classLevel} </span> </p>
                    <p> Section : <span> {section} </span> </p>
                    <p> Level : <span> {level} </span> </p>
                    {/* <StyledListAction style={{ cursor: "Button", textAlign: "center" }}><li><Paiement /></li></StyledListAction> */}
                    
                </Col>
            </StyledDetail>
        );
    }
    return (
        <Spin spinning={loading}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Spin>
    );
}
