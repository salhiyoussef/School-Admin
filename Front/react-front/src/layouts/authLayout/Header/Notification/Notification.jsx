import React, {useState} from "react";
import { Popover } from "antd";

import { StyledIcon } from "./StyledNotification";

export default function Notification() {
    const [visible, setVisible] = useState(false);

    function handleVisibleChange() {
        setVisible(!visible);
    }
  return (
    <Popover
      content={
          <div>
              Notification
          </div>
      }
      title="Title"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <StyledIcon className="icon fas fa-bell" />
    </Popover>
  );
}
