import types from "./types";

export const AppReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
        erorrs: null,
      };
    case types.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case types.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => {
          return transaction._id !== action.payload;
        }),
      };
    case types.TRANSACTION_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
