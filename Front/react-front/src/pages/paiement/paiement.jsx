import React, { useEffect, useState } from "react";
import { Row, Col, Table, Popover, Pagination, Modal, Input, Switch } from "antd";
import { get } from "lodash";
import CardApp from "./../../components/card";
import { StyledListAction, StyledAction } from "../../components/styled";
import EditPaiement from "./editPaiement"

export default function Paiement({layout, paiement, getAllPaiement,search_Paiement, dataEditPaiement, deletePaiement, validationPaiement}) {
    const { loading, data, offset, paiements } = paiement;
    const { login:{user : {typeAccount}}} = layout;
    const [valueName,setValueName] = useState()
    const { confirm } = Modal;
    useEffect(() => {
        getAllPaiement();
      }, [getAllPaiement]);



      function handelChangeName(e) {
        const { target: { value } } = e;
        setValueName(value);
        search_Paiement(value)
      }
      // function handelDetailStudent(record) {
      //   const{firstName, lastName, email} = record;
      //   setVisible(true);
      //   Modal.info({
      //     title: 'plus info de driver',
      //     content: (
      //       <Row gutter={24}>
      //         <Col xs={24}>
      //           <p> Name: <b> {`${driverName}`} </b>  </p>
      //         </Col>
      //         <Col xs={24} md={10}>
      //           <p> CIN: <b> {`${driverCin}`} </b>  </p>
      //         </Col>
      //         <Col xs={24} md={14}>
      //           <p> PERMIS: <b> {`${driverPermis}`} </b>  </p>
      //         </Col>
      //         <Col xs={24}>
      //           <p> Email: <b> {`${driverEmail}`} </b>  </p>
      //         </Col>
      //         <Col xs={24} md={24}>
      //           <p> Adress: <b> {`${driverAdress}`} </b>  </p>
      //         </Col>
      //         <Col xs={24} md={12}>
      //           <p> Phone: <b> {`${driverPhone}`} </b>  </p>
      //         </Col>
      //         <Col xs={24} md={12}>
      //           <p> Gender: <b> {`${driverGender}`} </b>  </p>
      //         </Col>
      //         <Col xs={24} >
      //           <p> ID: <b> {`${driverId}`} </b>  </p>
      //         </Col>
      //       </Row>
      //       ),
      //       onOk() {},
      //   });
      // }
      function handelDeletePaiement(record) {
        const { fraisInscription, fraisTransport, montant, idStudent, key , typePaiement} = record;
        const total=parseInt(fraisInscription)+parseInt(fraisTransport)+parseInt(montant);
        confirm({
          title: "Are you sure delete this Paiement?",
          content: (
            <Row gutter={24}>
              <Col xs={24}>
                <p> frais Inscription: <b> {`${fraisInscription}`} </b>  </p>
              </Col>
              <Col xs={24} md={12}>
                <p> frais Transport: <b> {`${fraisTransport}`} </b>  </p>
              </Col>
              <Col xs={24} md={12}>
                <p> montant: <b> {`${montant}`} </b>  </p>
              </Col>
              <Col xs={24} md={12}>
                <p> total: <b> {`${total}`} </b>  </p>
              </Col>
              <Col xs={24}>
                <p> Student: <b> {`${idStudent}`} </b>  </p>
              </Col>
              <Col xs={24}>
                <p> Type Paiement: <b> {`${typePaiement}`} </b>  </p>
              </Col>
            </Row>
          ),
          okText: "Yes",
          okType: "danger",
          cancelText: "No",
          onOk() {
            deletePaiement(key);
          }
        });
      }
      function hundelDataEditPaiement(record) {
        dataEditPaiement(record)
      }
      function hundelClickSwitch(record){
        const {typePaiement,idStudent:{lastName,firstName}, key,fraisInscription,fraisTransport,montant} = record
        const TypePaiement = !typePaiement
        const payload = {TypePaiement,key,fraisInscription,fraisTransport,montant}
          if (!typePaiement) {
            confirm ({ 
              title: 'Are you sure you want to validate this payment ?',
              okText: 'Yes',
              cancelText: 'No',
              onOk() {
                validationPaiement(payload)
            }})
          } 
      }
      const columns = typeAccount==="Admin" ? [
        {
          title: "Registration costs DH",
          dataIndex: "fraisInscription",
          key: "fraisInscription"
        },
        {
          title: "Transport costs DH",
          dataIndex: "fraisTransport",
          key: "fraisTransport"
        },
        {
          title: "Amount DH",
          dataIndex: "montant",
          key: "montant"
        },
        {
          title: "Total DH",
          dataIndex: "total",
          key: "total"
        },
        {
          title: "Student",
          dataIndex: "idStudent",
          key: "idStudent"
        },
        {
          title: "Valid Paiement",
          // dataIndex: "typePaiement",
          key: "typePaiement",
          render: (text, record) => {
            const {typePaiement} = record
            return(
              <Switch
              checkedChildren={'O'}
              unCheckedChildren={'X'}
              checked={typePaiement}
              disabled={typePaiement}
              onClick={()=>hundelClickSwitch(record)}
            />
            )
          }
        },
        {
          title: "Action",
          key: "action",
          render: (text, record) => (
            <Popover
              content={
                <StyledListAction>
                  <li onClick={() => hundelDataEditPaiement(record)}>
                    <i className="icon fas fa-user-edit"/> <EditPaiement/>
                  </li>
                  <li onClick={() => handelDeletePaiement(record)}>
                    <i className="icon fas fa-trash-alt" /> Delete
                  </li>
                </StyledListAction>
              }
              trigger="click"
            >
              <StyledAction>...</StyledAction>
            </Popover>
          )
        }
      ]:[
        {
          title: "Registration costs DH",
          dataIndex: "fraisInscription",
          key: "fraisInscription"
        },
        {
          title: "Transport costs DH",
          dataIndex: "fraisTransport",
          key: "fraisTransport"
        },
        {
          title: "Amount DH",
          dataIndex: "montant",
          key: "montant"
        },
        {
          title: "Total DH",
          dataIndex: "total",
          key: "total"
        },
        {
          title: "Student",
          dataIndex: "idStudent",
          key: "idStudent"
        },
        {
          title: "Action",
          key: "action",
          render: (text, record) => (
            <Popover
              content={
                <StyledListAction>
                  <li onClick={() => hundelDataEditPaiement(record)}>
                    <i className="icon fas fa-user-edit"/> <EditPaiement/>
                  </li>
                  <li onClick={() => handelDeletePaiement(record)}>
                    <i className="icon fas fa-trash-alt" /> Delete
                  </li>
                </StyledListAction>
              }
              trigger="click"
            >
              <StyledAction>...</StyledAction>
            </Popover>
          )
        }
      ];
    const totalPaiement = get(data, "length", 0);
    // const dataPaiement = get(paiement, "paiements", []);
    // console.log(dataPaiement);
  const dataSource =(data!==null) ? data.map(data => {
    const {
      fraisInscription,
      fraisTransport,
      montant,
      _id,
      typePaiement
    } = data;
    const {idStudent} = data!==null ? data : ''
    const total=parseInt(fraisInscription)+parseInt(fraisTransport)+parseInt(montant);
    return {
      key: _id,
      fraisInscription:`${fraisInscription}`,
      fraisTransport:`${fraisTransport}`,
      montant:`${montant}`,
      total:`${total}`,
      idStudent:`${idStudent.firstName} ${idStudent.lastName}`,
      typePaiement:typePaiement
    };
  }):[];
return(
<Row gutter={24}>
      <Col xs={24}>
        <CardApp>
          <Row gutter={24}>
            <Col xs={24} style={{ marginBottom: "20px" }}>
              <Row gutter={24}>
                <Col xs={24} md={12}>
                <h1>Liste Paiement</h1>
                  {/* <Input
                    addonBefore="Email Student"
                    placeholder="SEARCH EMAIL STUDENT"
                    onChange={handelChangeName}
                  /> */}
                </Col>
              </Row>
            </Col>
            <Col xs={24}>
              <p style={{ float: "right" }}> {`${totalPaiement} Result(s) found`} </p>
              <Table
                columns={columns}
                dataSource={dataSource}
                bordered
                pagination={false}
                loading={loading}
              />
            </Col>
            <Col xs={24} style={{ margin: "25px 0 0" }}>
              <Pagination
                current={offset}
                // onChange={handelChangePaginate}
                total={totalPaiement}
                style={{ textAlign: "center" }}
              />
            </Col>
          </Row>
        </CardApp>
      </Col>
    </Row>
)
}