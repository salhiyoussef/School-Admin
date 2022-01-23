import React, { useEffect } from "react";
import { Col } from "antd";

import CardApp from "../../components/card";
import ListStudent from "./listStudents";
import DetailStudent from "./detailsStudents";
import { StyledStudent } from "./styledStudent";

export default function Student({ layout, students, getAllStudents}) {
  const {
    login: {
      user: { typeAccount }
    }
  } = layout;
  useEffect(() => {
    getAllStudents();
  }, [getAllStudents]);
  
  return (
    <StyledStudent gutter={24}>
      {/* {typeAccount === "Admin" ? (
        <Col xs={24}>
          <CardApp title="Add New User">
            <AddUsers />
          </CardApp>
        </Col>
      ) : null} */}
      <Col xs={24} md={9} style={{ marginRight: "40px" }} className="cardList">
        <CardApp title="All Student">
          <ListStudent />
        </CardApp>
      </Col>
      <Col xs={24} md={14}>
        <CardApp title="Student Details">
          <DetailStudent />
        </CardApp>
      </Col>
    </StyledStudent>
  );
}
