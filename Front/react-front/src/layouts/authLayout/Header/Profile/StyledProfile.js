import styled from "styled-components";

export const StyledProfile = styled.div`
  display: flex;
  img {
    border-radius: 100px;
    height: 40px;
    width: auto;
    cursor: pointer;
  }
  span {
    border: 2px solid #fff;
    bottom: 25px;
    height: 10px;
    position: absolute;
    right: 0;
    width: 10px;
    background-color: #55ce63;
    left: 65px;
  }
  .logo {
    bottom: 10px;
    left: 10px;
    b{
      bottom: 7px;
    }
  }
  p {
    display: inline-block;
    position: relative;
    cursor: pointer;
    b {
      color: #fff;
      margin-left: 5px;
      cursor: pointer;
      font-size: 17px;
    }
    i {
      position: absolute;
      left: 5px;
      color: #fff;
      top: 20px;
      font-weight: 500;
    }
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    &:hover {
      color: #16181b;
      text-decoration: none;
      background-color: #f8f9fa;
      color: #20b1cc;
      a {
        color: #20b1cc;
      }
    }
  }

  a {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }

  .list-logout {
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    display: block;
  }
`;
