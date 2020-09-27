import React, { useContext } from "react";
import { GlobalContext } from "../../global-state/globalState";

export const IncomeExpenses = (props) => {
  const { transactions } = useContext(GlobalContext);
  let expenses = Math.abs(
    transactions
      .filter((item) => {
        return item.amount < 0;
      })
      .reduce((acc, item) => (acc += item.amount), 0)
      .toFixed(2)
  );
  let income = Math.abs(
    transactions
      .filter((item) => {
        return item.amount > 0;
      })
      .reduce((acc, item) => (acc += item.amount), 0)
      .toFixed(2)
  );
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus" id="money-plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expensess</h4>
        <p className="money minus" id="money-minus">
          -${expenses}
        </p>
      </div>
    </div>
  );
};
