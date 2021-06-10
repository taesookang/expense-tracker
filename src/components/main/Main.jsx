import React from "react";
import Form from "./Form";

const Main = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="main-wrapper">
          <div className="balance">
            <h1>$99,933,450</h1>
            <h3>Current balance</h3>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Main;
