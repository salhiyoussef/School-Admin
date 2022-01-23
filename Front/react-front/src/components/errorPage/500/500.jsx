import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

export default function Error500() {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, the server is wrong."
      extra={
        <Button type="primary">
          <Link to="/dashboard">Back Home</Link>
        </Button>
      }
    />
  );
}
