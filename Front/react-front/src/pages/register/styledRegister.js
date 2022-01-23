import styled from "styled-components";
import { Col } from "antd";

export const StyledFooterRegister = styled(Col)`
  margin: 20px 0 10px;
  text-align: center;
  .ant-btn {
    width: 80%;
  }
`;

export const StyledLink = styled(Col)`
  text-align: center;
  a {
    color: #323232;
    font-size: 16px;
    &:hover{
        color: #1890ff;
    }
  }
`;
