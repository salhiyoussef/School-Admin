import React, { useState } from "react";
import { Popover } from "antd";
import { Link } from "react-router-dom";

import { StyledProfile, StyledList } from "./StyledProfile";
import { nameLogo } from "../../../../utils";
import { StyledNameLogo } from "../../../../components/styled";

export default function Profile({ layout, logoutUser }) {
  const [visible, setVisible] = useState(false);
  const {
    login: {
      user: { firstName, lastName, gendre, typeAccount }
    }
  } = layout;

  function handleVisibleChange() {
    setVisible(!visible);
  }
  return (
    <Popover
      content={
        <StyledList>
          <li>
            <Link to="my-profile"> My Profile </Link>
          </li>
          <li>
            <Link to="edit-profile"> Edit Profile </Link>
          </li>
          <li>
            <Link to="settings"> Settings </Link>
          </li>
          <li className="list-logout" onClick={() => logoutUser()}>
            Logout
          </li>
        </StyledList>
      }
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      placement="bottomRight"
      className="popver-admin"
    >
      <StyledProfile>
        <StyledNameLogo className="logo" gendre={gendre} width="50px" heigth="50px" size="18px">
          <b>{nameLogo(lastName, firstName)}</b>
        </StyledNameLogo>
        <span />
        <p>
          <b> {`${lastName} ${firstName}`} </b>
          <i>{typeAccount}</i>
        </p>
      </StyledProfile>
    </Popover>
  );
}
