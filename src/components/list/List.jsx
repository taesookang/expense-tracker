import React, { useContext } from "react";
import { Delete, MonetizationOn } from "@material-ui/icons";
import { ExpenseTrackerContext } from "../../context/context";

export default function List() {
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  return (
    <div className="list">
      <div className="card">
        <div className="listWrapper">
          <div className="header">
            <h3>History</h3>
          </div>
          <div className="transactions">
            {transactions.map((t) => (
              <div className="tBox" key={t.id}>
                <div className="icon">
                  <MonetizationOn
                    style={
                      t.type === "Income"
                        ? { color: "#2962ff" }
                        : { color: "#ff6d00" }
                    }
                  />
                </div>
                <div className="info">
                  <h4>{t.category}</h4>
                  <span>{t.date}</span>
                </div>
                <div
                  className={`amount ${t.amount > 100000 && "largeAmount"}`}
                  style={
                    t.type === "Income"
                      ? { color: "#2962ff" }
                      : { color: "#ff6d00" }
                  }
                >
                  {t.amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
                <div className="delete" onClick={() => deleteTransaction(t.id)}>
                  <Delete />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
