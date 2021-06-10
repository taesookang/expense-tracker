import React from "react";
import { AttachMoney } from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="logo">
          <AttachMoney />
        </div>
        <div className="menu">menu</div>
      </div>
    </div>
  );
}
