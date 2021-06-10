import React, { useReducer } from "react";
import contextReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = React.createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  console.log(transactions)
  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
