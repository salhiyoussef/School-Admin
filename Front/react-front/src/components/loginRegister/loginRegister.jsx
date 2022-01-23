import React from "react";
import { Col, Row } from "antd";

import { StyledLoginRegister } from "./styledLoginRegister";
import { logo } from "../../utils";

export default function LoginRegister({ children, title }) {
  return (
    <StyledLoginRegister>
      <Row gutter={24} className="row-logo">
        <Col xs={24}>
          <img src={logo} alt="log" />
        </Col>
      </Row>
      <Row gutter={24} className="row-content">
        <h1> {title} </h1>
        {children}
      </Row>
    </StyledLoginRegister>
  );
}
