import React, { useEffect } from "react";
import { Col, Spin, Pagination, Empty } from "antd";

import { StyledNameLogo } from "../../../components/styled";
import { nameLogo } from "../../../utils";
import { StyledList, StyledPaginate } from "../styledUsers";

export default function ListUsers({
  users,
  getAllUsers,
  setEmailUserDetail,
  setPaginate
}) {
  const {
    data,
    loading,
    total,
    detail: { user },
    offset
  } = users;

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  function changePaginate(page) {
    setPaginate(page);
  }

  return (
    <Spin spinning={loading}>
      <p> {`${total} result(s) found`} </p>
      {data === null ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ) : (
        data.map(d => (
          <StyledList
            key={d._id}
            onClick={() => setEmailUserDetail(d.email)}
            emailusers={d.email}
            emailactive={user && user.email}
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
                <i> {d.typeAccount} </i>
              </p>
            </Col>
          </StyledList>
        ))
      )}
      <StyledPaginate gutter={24}>
        <Col xs={24}>
          <Pagination
            current={offset}
            onChange={changePaginate}
            total={total}
          />
        </Col>
      </StyledPaginate>
    </Spin>
  );
}
