import React, { useContext } from "react";
import Form from "./Form";
import { ExpenseTrackerContext } from "../../context/context";

const Main = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <div className="main">
      <div className="card">
        <div className="main-wrapper">
          <div className="balance">
            <h1 style={{ color: `${balance >= 0 ? "#2962ff" : "#ff6d00"}` }}>
              {balance.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h1>
            <h3>Current balance</h3>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Main;
