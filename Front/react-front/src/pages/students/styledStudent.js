import styled from "styled-components";
import { Row } from "antd";

export const StyledList = styled(Row)`
  .left {
    margin-bottom: 25px;
  }
  align-items: center;
  background-color: ${props =>
    props.emailusers === props.emailactive ? "#debbbb" : "#f7f7f7"};
  padding: 20px 30px 0;
  margin-bottom: 2px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #debbbb;
  }
`;

export const StyledDetail = styled(Row)`
  .logo-detail {
    text-align: center;
    margin-bottom: 15px;
  }

  .description {
    p {
      font-size: 24px;
      text-align: center;
      span {
        font-weight: bold;
      }
    }
  }

  .popver-detail {
    font-size: 32px;
    font-weight: bold;
    position: absolute;
    right: 0;
    top: -35px;
    cursor: pointer;
  }
`;

export const StyledPaginate = styled(Row)`
  text-align: center;
  margin: 35px 0 0;
`;

export const StyledStudent = styled(Row)`
  .cardList {
    .ant-card-body {
      padding: 24px 0 10px;
    }
  }
`;
