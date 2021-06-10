import React, { useState, useContext } from "react";
import NumberFormat from "react-number-format";
import { ExpenseTrackerContext } from '../../context/context'
import { v4 as uuidv4 } from 'uuid'
import { incomeCategories, expenseCategories  } from '../../constants/categories'

const initialState = {
  type: "Income",
  category: "",
  amount: "",
  date: "",
};


export default function Form() {
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext)
  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories ;
  
  const createTransaction = (e) => {
    e.preventDefault();
    const transaction = { ...formData, amount: Number(formData.amount.substring(1).replaceAll(",","")), id: uuidv4() } 
    addTransaction(transaction);
    setFormData(initialState);
  }


  return (
    <div className="inputForm">
      <form action="">
        <div className="type inputArea">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <div className="category inputArea">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            { selectedCategories.map((c) => (
              <option key={c.type} value={c.type}>{c.type}</option>
            ))}
          </select>
        </div>
        <div className="date inputArea">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            placeholder="Date"
            value={formData.date}
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
        <button className="btn" type="submit" onClick={createTransaction}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}
