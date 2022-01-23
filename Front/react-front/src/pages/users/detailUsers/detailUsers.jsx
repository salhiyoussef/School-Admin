import React, { useEffect } from "react";
import { Spin, Col, Popover, Empty, Modal } from "antd";
import moment from 'moment';

import { nameLogo } from "../../../utils";
import { StyledNameLogo, StyledListAction, StyledAction } from "../../../components/styled";
import { StyledDetail } from "../styledUsers";
import EditUser from "./editUser";

export default function DetailUsers({ layout, users, setEmailUserDetail, deleteUser, setDateUserEdit }) {
    const { confirm } = Modal;
    const {
        login: {
            user: { email }
        }
    } = layout;
    const {
        detail: { loading, user }
    } = users;

    useEffect(() => {
        setEmailUserDetail(email);
    }, [setEmailUserDetail]);

    function showDeleteConfirm(actif) {
        const { firstName, lastName, email, _id } = actif;
        confirm({
            title: 'Are you sure delete this user?',
            content: (
                <React.Fragment>
                    <p style={{marginBottom: "0px"}}> <b> {`${lastName} ${firstName}`} </b> </p>
                    <p> {email} </p>
                </React.Fragment>
            ),
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteUser(_id);
            }
        });
    }

    function dataEditUser(actif) {
        setDateUserEdit(actif);
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
                            <li onClick={() => dataEditUser(actif)}> <i className="icon fas fa-user-edit"/> <EditUser /> </li>
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

    if (user) {
        const { firstName, lastName, typeAccount, gendre, phone, address, dateCreationAccount, email } = user;
        const { login } = layout;
        const dataActif = {
            ...user
        };
        const dataConnect = {
            accountConnect: login.user.typeAccount,
            emailConnect: login.user.email
        }
        return (
            <StyledDetail gutter={24}>
                <Col xs={24} className="logo-detail">
                    <StyledNameLogo
                        gendre={gendre}
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
                    <p> First Name : <span> {firstName} </span> </p>
                    <p> Last Name : <span> {lastName} </span> </p>
                    <p> Email : <span> {email} </span> </p>
                    <p> Phone : <span> {phone} </span> </p>
                    <p> Address : <span> {address} </span> </p>
                    <p> Date Creation Account : <span> {moment(dateCreationAccount).format("DD/MMMM/YYYY")} </span> </p>
                    <p> Account : <span> {typeAccount} </span> </p>
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
