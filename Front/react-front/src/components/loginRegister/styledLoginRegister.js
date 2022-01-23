import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const StyledLoginRegister = styled(Content)`
  min-width: 500px;
  width: 40%;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(188, 211, 233, 0.8);
  
  .row-logo {
    position: relative;
    bottom: 24px;
    text-align: center;
    img {
      height: 150px;
      width: auto;
      width: 100%;
      max-width: 200px;
    }
  }

  .row-content {
    position: relative;
    bottom: 50px;
  }

  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }
`;
