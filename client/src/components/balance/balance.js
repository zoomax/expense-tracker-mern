import React, { useContext, useState, useRef, useEffect } from "react";
import { GlobalContext } from "../../global-state/globalState";
export const Balance = (props) => {
  const render = useRef(0);   

  const context = useContext(GlobalContext);
  const total = context.transactions
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    .toFixed(2);
  const [sign, setSign] = useState(() => {
    return total > 0 ? "+" : "-";
  });
  useEffect(() => {
    setSign(total > 0 ? "+" : "-") ; 
    console.log(render.current++);
  }, [total]); // never use a contineously changed useState hook Variable within a useEffect hook (it'll get you into a infinite loop)
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 className={sign === "+" ? "money plus" : "money minus"}>
        {sign}${Math.abs(total)}
      </h1>
    </div>
  );
};
