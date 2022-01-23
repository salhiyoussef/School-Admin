import styled from "styled-components";
import { Field } from "redux-form";

export const StyledResult = styled.p`
  span {
    color: rgb(241, 49, 72);
    font-weight: bold;
  }
`;

export const StyledField = styled(Field)`
  border: none;
  border-bottom: 1px solid #d9d9d9;
`;

export const StyledForm = styled.form`
  .ant-form-item {
    margin-bottom: 10px;
  }
  .ant-input,
  .ant-select-selection--single {
    border: none;
    border-bottom: 1px solid #d9d9d9;
  }
  .has-error .ant-input {
    background-color: #fff;
    border-color: #f5222d;
  }
`;

export const StyledFormBorder = styled.form`
  .ant-input,
  .ant-select {
    height: 50px;
    background-color: #f8f8f8 !important;
    font-size: 14px;
    color: #111111;
    border-radius: 4px;
    border: none;
    padding: 5px 15px;
  }

  .ant-select {
    padding: 5px 0px;
  }

  .ant-select-selection {
    height: 42px;
    background-color: #f8f8f8;
    font-size: 14px;
    color: #111111;
    border-radius: 4px;
    border: none;
  }

  .ant-btn {
    width: 100%;
  }

  .has-error b {
    top: 50px !important;
  }
`;

export const StyledNameLogo = styled.div`
  width: ${props => props.width};
  border-radius: 100px;
  height: ${props => props.heigth};
  cursor: pointer;
  background-color: ${props =>
    props.gendre === "Male" ? "#a6e4ee" : "#fe3c57"};
  display: inline-block;
  position: relative;
  text-align: center;
  b {
    font-size: ${props => props.size};
    text-align: center;
    font-weight: bold;
    position: relative;
    color: #fff;
    bottom: ${props => props.bottom};
  }
`;

export const StyledListAction = styled.ul`
  list-style-type: none;
  padding: 0px 10px 0;
  margin: 0;
  li {
    font-size: 18px;
    font-weight: bold;
    &:hover {
      color: rgb(24, 182, 203);
    }
  }
`;

export const StyledAction = styled.span`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
`;
