import React from "react";
import { Row, Col } from "antd";

import CardApp from "../../components/card";
import { StyledProfile } from "./styledProfile";
import { StyledNameLogo } from "../../components/styled";
import { nameLogo } from "../../utils";

export default function Profile({ layout }) {
  const {
    login: {
      user: { firstName, lastName, email, typeAccount, gendre, phone, address }
    }
  } = layout;

  return (
    <CardApp>
      <StyledProfile gutter={24}>
        <Col xs={12} className="left">
          <Row gutter={24}>
            <Col xs={8}>
              <StyledNameLogo
                gendre={gendre}
                width="100px"
                heigth="100px"
                size="40px"
                bottom="-15px"
              >
                <b>{nameLogo(lastName, firstName)}</b>
              </StyledNameLogo>
            </Col>
            <Col xs={16}>
              <h1> {`${lastName} ${firstName}`} </h1>
              <p> {typeAccount} </p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="rigth">
          <p>
            Email: <span> {email} </span>
          </p>
          <p>
            Phone: <span> {phone} </span>
          </p>
          <p>
            Address: <span> {address} </span>
          </p>
          <p>
            Gendre: <span> {gendre} </span>
          </p>
        </Col>
      </StyledProfile>
    </CardApp>
  );
}
