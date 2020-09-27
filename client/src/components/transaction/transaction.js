import React, { useContext } from "react";
import { GlobalContext } from "../../global-state/globalState";

export const Transaction = (props) => {
  const sign = props.transaction.amount > 0 ? "+" : "-";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {props.transaction.text}
      <span>
        {sign}${Math.abs(props.transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(props.transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
