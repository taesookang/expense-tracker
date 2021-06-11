import React, { useState, useContext } from "react";
import { Delete, MonetizationOn } from "@material-ui/icons";
import { ExpenseTrackerContext } from "../../context/context";

export default function List() {
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);
  const [selected, setSelected] = useState("");

  const handleToggle = (id) => {
    setSelected(id);
    if (selected === id) {
      setSelected("");
    }
  };

  return (
    <div className="list">
      <div className="card">
        <div className="listWrapper">
          <div className="header">
            <h3>History</h3>
          </div>
          {transactions.length > 0 ? (
            <div className="transactions">
              {transactions.map((t) => (
                <div
                  className={`tBox ${t.note && selected === t.id && "active"}`}
                  key={t.id}
                  onClick={() => handleToggle(t.id)}
                  style={{ cursor: `${t.note && "pointer"}` }}
                >
                  <div className="tWrapper">
                    <div className="icon">
                      <MonetizationOn
                        style={{
                          color: `${
                            t.type === "Income" ? "#2962ff" : "#ff6d00"
                          }`,
                        }}
                      />
                      {t.note && <div className="indicator"></div>}
                    </div>
                    <div className="info">
                      <h4>{t.category}</h4>
                      <span>{t.date}</span>
                    </div>
                    <div
                      className={`amount ${t.amount > 100000 && "largeAmount"}`}
                      style={{
                        color: `${t.type === "Income" ? "#2962ff" : "#ff6d00"}`,
                      }}
                    >
                      {t.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </div>
                    <div
                      className="delete"
                      onClick={() => deleteTransaction(t.id)}
                    >
                      <Delete />
                    </div>
                  </div>
                  {t.note && (
                    <div className="noteWrapper">
                      <div className="note">{t.note}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="filler">
              <img src="assets/fillerImage.jpg" alt="" />
              <span>No Transacitons</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
