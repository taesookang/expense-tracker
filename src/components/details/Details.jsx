import React from "react";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../hooks/useTransaction";

export default function Details({ title }) {
  const { total, chartData } = useTransactions(title);

  const options = {
    plugins: {
      legend: {
        position: "left",
        align: "middle",
      },
    },
  };

  return (
    <div className={title === "Income" ? "income" : "expense"}>
      <div className="card">
        <div className="detailWrapper">
          <div className="header">
            <h3>{title}</h3>
            <h1 className={total > 100000 ? "largeTotal" : "total"}>
              {total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h1>
          </div>
          <div className="chartContainer">
            {total === 0 ? (
              <div className="filler">
                <img src="assets/pieChart.png" alt="" />
                <h1>No data</h1>
                <span>Please add a transaction</span>
              </div>
            ) : (
              <Doughnut data={chartData} options={options} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
