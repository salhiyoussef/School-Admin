import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

export default function Error401() {
  return (
    <Result
      status="403"
      title="401"
      subTitle="Sorry, not authorized"
      extra={
        <Button type="primary">
          <Link to="/dashboard">Back Home</Link>
        </Button>
      }
    />
  );
}
