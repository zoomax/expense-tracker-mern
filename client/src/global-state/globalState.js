import React, { createContext, useReducer } from "react";
import { AppReducer } from "./appReducer";
import types from "./types";
import axios from "axios";

const initialState = {
  transactions: [],
  errors: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const getTransactions = async function () {
    try {
      const res = await axios.get("api/v1/transactions");
      dispatch({
        type: types.GET_TRANSACTIONS,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: types.TRANSACTION_ERROR,
        payload: error.response.data.error,
      });
    }
  };
  const deleteTransaction = async (id) => {
    try {
      const transaction  = await axios.delete("api/v1/transactions/"+id) ; 
      
      dispatch({
        type: types.DELETE_TRANSACTION,
        payload: id,
      });
    } catch (erroe) {}
  };
  const addTransaction = async (transaction) => {
    try {
      const newTransaction = await axios.post(
        "api/v1/transactions",
        transaction
      );
      console.log(newTransaction);
      dispatch({
        type: types.ADD_TRANSACTION,
        payload: newTransaction.data.data,
      });
    } catch (error) {
      dispatch({
        type: types.TRANSACTION_ERROR,
        payload: error.response.data.error,
      });
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        errors: state.errors,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
