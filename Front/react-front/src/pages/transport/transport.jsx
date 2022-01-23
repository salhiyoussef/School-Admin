import React, { useState, useEffect } from "react";
import { Row, Col, Table, Popover, Pagination, Modal, Input } from "antd";
import { get } from "lodash";

import CardApp from "../../components/card";
import { StyledListAction, StyledAction } from "../../components/styled";
import AddTransport from "./addTransport";

export default function Transport({ getAllTransport, transport, deleteTransport }) {
  const { data, loading } = transport;

  const [visible, setVisible] = useState(false);

  const total = (data !== null) ? data.length : 0
  const dataSource = (data !== null) ? data.map(d => {
    const { routeName, vehiculeNumber, licenseNumber, _id, driverId: { address, cin, dateCreation, email, firstName, gender, lastName, permis, phone } } = d;
    return {
      key: _id,
      routeName,
      vehiculeNumber,
      licenseNumber,
      driverName: `${firstName} ${lastName}`,
      driverAdress: address,
      driverCin: cin,
      driverDateCreation: dateCreation,
      driverEmail: email,
      driverGender: gender,
      driverPermis: permis,
      driverPhone: phone,
      driverId: d.driverId._id
    };
  }) : []

  useEffect(() => {
    getAllTransport();
  }, [getAllTransport]);

  function handelDeleteTransport(record) {
    const{key, routeName, vehiculeNumber, licenseNumber, driverName, driverId} = record;
      Modal.confirm({
        title: "Are you sure delete this Transport?",
        content: (
          <Row gutter={24}>
            <Col xs={24}>
              <p> Name: <b> {`${routeName}`} </b>  </p>
            </Col>
            <Col xs={24} md={12}>
              <p> vehicule_Number: <b> {`${vehiculeNumber}`} </b>  </p>
            </Col>
            <Col xs={24} md={12}>
              <p> license_Number: <b> {`${licenseNumber}`} </b>  </p>
            </Col>
            <Col xs={24}>
              <p> driver_Name: <b> {`${driverName}`} </b>  </p>
            </Col>
            <Col xs={24} md={24}>
              <p> driver_Id: <b> {`${driverId}`} </b>  </p>
            </Col>
          </Row>
        ),
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          deleteTransport(key);
        }
      });
    }
  function handelUpdateTransport(record) {
    console.log("handelUpdateTransport", record);
  }
  function handelDetailTransport(record) {
    const{driverName, driverEmail, driverCin, driverAdress, driverGender, driverDateCreation, driverId, driverPermis, driverPhone} = record;
    setVisible(true);
    Modal.info({
      title: 'plus info de driver',
      content: (
        <Row gutter={24}>
          <Col xs={24}>
            <p> Name: <b> {`${driverName}`} </b>  </p>
          </Col>
          <Col xs={24} md={10}>
            <p> CIN: <b> {`${driverCin}`} </b>  </p>
          </Col>
          <Col xs={24} md={14}>
            <p> PERMIS: <b> {`${driverPermis}`} </b>  </p>
          </Col>
          <Col xs={24}>
            <p> Email: <b> {`${driverEmail}`} </b>  </p>
          </Col>
          <Col xs={24} md={24}>
            <p> Adress: <b> {`${driverAdress}`} </b>  </p>
          </Col>
          <Col xs={24} md={12}>
            <p> Phone: <b> {`${driverPhone}`} </b>  </p>
          </Col>
          <Col xs={24} md={12}>
            <p> Gender: <b> {`${driverGender}`} </b>  </p>
          </Col>
          <Col xs={24} >
            <p> ID: <b> {`${driverId}`} </b>  </p>
          </Col>
        </Row>
        ),
        onOk() {},
    });
  }
  function handleCancel() {
    setVisible(false);
  };
  const columns = [
    {
      title: "Route",
      dataIndex: "routeName",
      key: "routeName",
    },
    {
      title: "Vehicule Number",
      dataIndex: "vehiculeNumber",
      key: "vehicleNumber",
    },
    {
      title: "License Number",
      dataIndex: "licenseNumber",
      key: "licenseNumber",
    },
    {
      title: "Driver",
      dataIndex: "driverName",
      key: "driver",
      render: (text , record) => (
        <div size="middle">
          <Row gutter={24} align="middle" style={{display:"flex",alignItems:"center"}} justify="space-around">
            <Col span={16}>
              <span>{record.driverName}</span>
            </Col>
            <Col span={8} >
              <a onClick={() => handelDetailTransport(record)}>Detail</a>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      fixed: 'right',
      width: 80,
      render: (text, record) => (
        <Popover
          content={
            <StyledListAction>
              <li onClick={() => handelUpdateTransport(record)}>
                <i className="icon fas fa-user-edit" /> Update
              </li>
              <li onClick={() => handelDeleteTransport(record)}>
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

  return (
    <Row gutter={24}>
      <Col xs={24}>
        <CardApp title="Add New Transport">
          <AddTransport />
        </CardApp>
      </Col>
      <Col xs={24}>
        <CardApp>
          <Row gutter={24}>
            <Col xs={24}>
              <p style={{ float: "right" }}> {`${total} Result(s) found`} </p>
              <Table
                columns={columns}
                dataSource={dataSource}
                bordered
                pagination={false}
                loading={loading}
                // scroll={{ x: 1000, y: 300 }}
              />
            </Col>
          </Row>
        </CardApp>
      </Col>
    </Row>
  );
}
