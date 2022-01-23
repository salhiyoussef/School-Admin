/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Layout, Spin } from "antd";
import { first } from "lodash";
import { Redirect } from "react-router-dom";

import { checkExpire } from "../../utils";
import SideBar from "./SideBar";
import HeaderApp from "./Header";
import FooterApp from "./Footer";
import BreadcrumbApp from "./Breadcrumb";

export default function AuthLayout({
  children,
  layout,
  setPageCurrent,
  setSubMenuActive
}) {
  const { Content } = Layout;
  const { defaultOpenKeys } = layout;
  const webSite = window.location.href.split("/");

  useEffect(() => {
    const page = webSite[webSite.length - 1];
    setPageCurrent(page);
    // if (page.includes("-")) {
    //   const menu = page.split("-");
    //   setSubMenuActive(first(menu));
    // }
    const menu = page.split("-");
    setSubMenuActive(first(menu));
  }, [setPageCurrent, setSubMenuActive]);

  if (checkExpire()) {
    return <Redirect to="/" />;
  } else {
    if (defaultOpenKeys) {
      return (
        <Layout>
          <SideBar />
          <Layout>
            <HeaderApp />
            <BreadcrumbApp />
            <Content style={{ background: "transparent" }}>{children}</Content>
            <FooterApp />
          </Layout>
        </Layout>
      );
    }
    return (
      <div className="spinning-app">
        <Spin spinning size="large" />
      </div>
    );
  }
}
