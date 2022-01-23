import React from "react";
import { Breadcrumb } from "antd";
import { StyledBreadcrumb } from './StyledBreadcrumb';


export default function BreadcrumbApp() {
  return (
    <StyledBreadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </StyledBreadcrumb>
  );
}
