import React from "react";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../hooks/useTransaction";

export default function Details({ title }) {
  const { total, chartData } = useTransactions(title);
  return (
    <div className={title === "Income" ? "income" : "expense"}>
      <div className="card">
        <div className="detailWrapper">
          <div className="header">
            <h3>{title}</h3>
            <h1 className={total > 100000 && "largeTotal"}>
              {total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h1>
          </div>
          <div className="chartContainer">
            {total === 0 ? (
              <div className="filler">
                <h1>No Data Yet.</h1>
                <span>Please add a transaction.</span>
              </div>
            ) : (
              <Doughnut data={chartData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
