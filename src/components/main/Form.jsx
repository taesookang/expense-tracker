import React, { useState, useContext } from "react";
import NumberFormat from "react-number-format";
import { ExpenseTrackerContext } from "../../context/context";
import { v4 as uuidv4 } from "uuid";
import {
  incomeCategories,
  expenseCategories,
} from "../../constants/categories";
import MsgBar from "../msgBar/MsgBar";

const initialState = {
  type: "Income",
  category: "",
  amount: "",
  date: "-",
  note: ""
};

export default function Form() {
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories;
  const [open, setOpen] = useState(false)

  const createTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      ...formData,
      amount: Number(formData.amount.substring(1).replaceAll(",", "")),
      id: uuidv4(),
    };

    if(transaction.category === "") {
      transaction.category=transaction.type;
    } 

    setOpen(true)
    addTransaction(transaction);
    setFormData(initialState);
  };

  const handleNoteChange = (e) => {
    if(e.target.value !== "") {
      setFormData({ ...formData, note: e.target.value })
    }
  }

  return (
    <div className="inputForm">
      <MsgBar open={open} setOpen={setOpen} />
      <form action="">
        <div className="type inputArea">
          <label htmlFor="type">Type</label>
          <div className="radioBtn">
            <input
              type="radio"
              value="Income"
              checked={formData.type === "Income"}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            />
            <span>Income</span>
            <input
              type="radio"
              value="Expense"
              checked={formData.type === "Expense"}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            />
            <span>Expense</span>
          </div>
        </div>
        <div className="category inputArea">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            defaultValue="none"
          >
            <option value="none" hidden>
              - - 
            </option>
            {selectedCategories.map((c) => (
              <option key={c.type} value={c.type}>
                {c.type}
              </option>
            ))}
          </select>
        </div>
        <div className="date inputArea">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
        <div className="amount inputArea">
          <NumberFormat
            thousandSeparator={true}
            prefix={"$"}
            placeholder="Enter Amount"
            decimalScale={2}
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </div>
        <div className="note inputArea">
          <label>Note</label>
          <textarea type="text" rows={3} value={formData.note} onChange={handleNoteChange} onSubmit={e => e.target.reset()} />
        </div>
        <button className="btn" type="submit" onClick={createTransaction}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}
