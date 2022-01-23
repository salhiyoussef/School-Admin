import React, { useEffect } from "react";
import { Col, Spin, Pagination, Empty } from "antd";
import { get } from "lodash";
import { StyledNameLogo } from "../../../components/styled";
import { nameLogo } from "../../../utils";
import { StyledList, StyledPaginate } from "../styledStudent";

export default function ListStudent({
    students,
    setEmailStudentDetail,
    setPaginate
}) {

  function changePaginate(page) {
    setPaginate(page);
  }
  const { loading, data, offset } = students;
    const totalStudent = get(data, "total", 0);
    const dataSource = get(data, "result", [])
    
  if(dataSource === null){
    return (
      <Spin>
          {
          dataSource.map(d => (
            <StyledList
              key={d._id}
              onClick={() => setEmailStudentDetail(d.email)}
              emailusers={d.email}
              emailactive={dataSource && dataSource.email}
            >
              <Col xs={8} className="left">
                <StyledNameLogo
                  gendre={d.gendre}
                  width="60px"
                  heigth="60px"
                  size="20px"
                  bottom="-15px"
                >
                  <b>{nameLogo(d.lastName, d.firstName)}</b>
                </StyledNameLogo>
              </Col>
              <Col xs={16} className="right">
                <p>
                  <b> {`${d.lastName} ${d.firstName}`} </b>
                  <br />
                  <i> {d.email} </i><br />
                </p>
              </Col>
            </StyledList>
          ))
        }
        <StyledPaginate gutter={24}>
          <Col xs={24}>
            <Pagination
              current={offset}
              onChange={changePaginate}
              total={totalStudent}
            />
          </Col>
        </StyledPaginate>
      </Spin>
    );
  }
  return (
    <Spin spinning={loading}>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </Spin>
);
}
