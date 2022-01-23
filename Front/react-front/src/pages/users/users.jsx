import React from "react";
import { Col } from "antd";

import CardApp from "../../components/card";
import ListUsers from "./listUsers";
import DetailUsers from "./detailUsers";
import AddUsers from "./addUsers";
import { StyledUsers } from "./styledUsers";

export default function Users({ layout }) {
  const {
    login: {
      user: { typeAccount }
    }
  } = layout;
  return (
    <StyledUsers gutter={24}>
      {typeAccount === "Admin" ? (
        <Col xs={24}>
          <CardApp title="Add New User">
            <AddUsers />
          </CardApp>
        </Col>
      ) : null}
      <Col xs={24} md={9} style={{ marginRight: "40px" }} className="cardList">
        <CardApp title="All User">
          <ListUsers />
        </CardApp>
      </Col>
      <Col xs={24} md={14}>
        <CardApp title="User Details">
          <DetailUsers />
        </CardApp>
      </Col>
    </StyledUsers>
  );
}
