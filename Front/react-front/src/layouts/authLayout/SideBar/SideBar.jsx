/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link,Redirect} from "react-router-dom";
import { logo } from "../../../utils";
import { StyledLogo } from "./SideBarStyled";

export default function SideBar({layout,setPageCurrent, setSubMenuActive }) {
  const { Sider } = Layout;
  const { SubMenu, Item } = Menu;
  const {collapsed, defaultSelectedKeys, defaultOpenKeys, login:{user:{typeAccount}} } = layout;
  if (typeAccount==='User') {
    return <Redirect to="/students-add" />;
  }
  else{
    return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <StyledLogo src={logo} alt="School" collapsed={collapsed} />
      </div>
      <Menu
        theme="lite"
        mode="inline"
        defaultSelectedKeys={[defaultSelectedKeys.toString()]}
        defaultOpenKeys={[defaultOpenKeys]}
      >
        <Item key="1" onClick={() => setPageCurrent("Dashboard")}>
          <i className="icon fas fa-tachometer-alt" />
          <span>
            <Link to="/dashboard"> Dashboard </Link>
          </span>
        </Item>

        <Item key="2" onClick={() => setPageCurrent("Users")}>
          <i className="fas fa-user-cog"/>
          <span>
            <Link to="/users"> Users </Link>
          </span>
        </Item>

        <SubMenu
          key="students"
          onClick={() => setSubMenuActive("students")}
          title={
            <span>
              <i className="icon fas fa-user-graduate"></i>
              Students
            </span>
          }
        >
        <Item key="3" onClick={() => setPageCurrent("StudentsAdd")}>
            <Icon type="plus" />
            <span>
              <Link to="/students-add"> Add </Link>
            </span>
          </Item>

          <Item key="4" onClick={() => setPageCurrent("StudentsLists")}>
            <i className="icon fas fa-clipboard-list" />
            <span>
              <Link to="/students-list"> Lists </Link>
            </span>
          </Item>
          
        </SubMenu>

        {/* <Item key="3" onClick={() => setPageCurrent("StudentsLists")}>
          <i className="fas fa-user-cog"/>
          <span>
          <Link to="/students-list"> Students </Link>
          </span>
        </Item> */}


        <Item key="5" onClick={() => setPageCurrent("Driver")}>
          <i className="icon fas fa-users" />
          <span>
            <Link to="/driver"> Drivers </Link>
          </span>
        </Item>
        <Item key="6" onClick={() => setPageCurrent("Transport")}>
          <i className="icon fas fa-bus" />
          <span>
            <Link to="/transport"> Transport </Link>
          </span>
        </Item>
        <Item key="7" onClick={() => setPageCurrent("Paiement")}>
          <i className="icon fas fa-bus" />
          <span>
            <Link to="/paiement"> Paiement </Link>
          </span>
        </Item>

        {/* <Item key="8" onClick={() => setPageCurrent("formik")}>
          <i className="icon fas fa-bus" />
          <span>
            <Link to="/formik"> Formik </Link>
          </span>
        </Item> */}

      </Menu>
    </Sider>
  );
}
}
