import React, { useEffect, useState } from "react";
import { Row, Col, Table, Popover, Pagination, Modal, Input } from "antd";
import { get } from "lodash";
// import moment from "moment";

import CardApp from "./../../components/card";
import AddNewDrivers from "./addNewDrivers";
import { StyledListAction, StyledAction } from "../../components/styled";

export default function Drivers({layout,drivers, getDriverData, setPaginate, deleteDriver, search_driver }) {
  const { loading, data, offset, drivrs } = drivers;
  const { login:{user : {typeAccount}}} = layout;

  const { confirm } = Modal;
  const [valueCin, setValueCin] = useState();
  const [valuePermis, setValuePermis] = useState();
  const [valuePhone, setValuePhone] = useState();

  useEffect(() => {
    getDriverData();
  }, [getDriverData]);

  function handelChangeCin(e) {
    const { target: { value } } = e;
    setValueCin(value);
    search_driver(value)
  }
  function handelChangePermis(e) {
    const { target: { value } } = e;
    setValuePermis(value);
  }

  function handelChangePhone(e) {
    const { target: { value } } = e;
    setValuePhone(value);
  }


  function handelDeleteDriver(record) {
    const { address, name, email, cin, phone, gender, key, permis } = record;
    confirm({
      title: "Are you sure delete this Driver?",
      content: (
        <Row gutter={24}>
          <Col xs={24}>
            <p> Name: <b> {`${name}`} </b>  </p>
          </Col>
          <Col xs={24} md={12}>
            <p> CIN: <b> {`${cin}`} </b>  </p>
          </Col>
          <Col xs={24} md={12}>
            <p> PERMIS: <b> {`${permis}`} </b>  </p>
          </Col>
          <Col xs={24}>
            <p> Email: <b> {`${email}`} </b>  </p>
          </Col>
          <Col xs={24} md={24}>
            <p> Adress: <b> {`${address}`} </b>  </p>
          </Col>
          <Col xs={24} md={12}>
            <p> Phone: <b> {`${phone}`} </b>  </p>
          </Col>
          <Col xs={24} md={12}>
            <p> Gender: <b> {`${gender}`} </b>  </p>
          </Col>
        </Row>
      ),
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteDriver(key);
      }
    });
  }

  const columns = [
    {
      title: "last Name",
      dataIndex: "lastName",
      key: "lastName"
    },
    {
      title: "first Name",
      dataIndex: "firstName",
      key: "firstName"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Cin",
      dataIndex: "cin",
      key: "cin"
    },
    {
      title: "Permis",
      dataIndex: "permis",
      key: "permis"
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Popover
          content={
            <StyledListAction>
              <li>
                <i className="icon fas fa-user-edit" /> Update
              </li>
              <li onClick={() => handelDeleteDriver(record)}>
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

  const totalDrivers = get(data, "total", 0);
  const datos = get(data, "result", [])
  const dataSource = (drivrs.length > 0) ? drivrs : datos.map(data => {
    const {
      firstName,
      lastName,
      email,
      cin,
      phone,
      gender,
      address,
      _id,
      permis
    } = data;
    return {
      key: _id,
      lastName: lastName ,
      firstName: firstName,
      email,
      cin,
      phone,
      gender,
      address,
      permis
    };
  });

  function handelChangePaginate(page) {
    setPaginate(page);
    console.log(page);
  }

  return (
    <Row gutter={24}>
      {typeAccount==='Admin' ? (
      <Col xs={24}>
        <CardApp title="Add New Driver">
          <AddNewDrivers />
        </CardApp>
      </Col>
      ):null}
      <Col xs={24}>
        <CardApp>
          <Row gutter={24}>
            <Col xs={24} style={{ marginBottom: "20px" }}>
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Input
                    addonBefore="CIN"
                    placeholder="SEARCH CIN"
                    value={valueCin}
                    onChange={handelChangeCin}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={24}>
              <p style={{ float: "right" }}> {`${totalDrivers} Result(s) found`} </p>
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
                onChange={()=>handelChangePaginate()}
                total={totalDrivers}
                style={{ textAlign: "center" }}
              />
            </Col>
          </Row>
        </CardApp>
      </Col>
    </Row>
  );
}
