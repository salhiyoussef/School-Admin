import styled from "styled-components";
import { Row } from "antd";

export const StyledProfile = styled(Row)`
  .rigth {
    p {
      font-size: 20px;
      margin-bottom: 10px;
      font-weight: 500;
      span {
        color: #8157d6;
        font-weight: bold;
        margin-left: 10px;
      }
    }
  }
  .left {
    h1 {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 0;
    }
    p {
      font-size: 18px;
      color: #07bdc9;
    }
  }
`;
