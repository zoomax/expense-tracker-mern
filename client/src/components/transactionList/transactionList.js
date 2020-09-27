import { get } from "mongoose";
import React  , {useContext, useEffect}from "react";
import { GlobalContext} from "../../global-state/globalState"
import { Transaction } from "../transaction/transaction";

export const TransactionList = (props) => {
  const {transactions , getTransactions} = useContext(GlobalContext) ; 
  useEffect(()=>{
    getTransactions();
  } , [])
  console.log(transactions);
  return (
    <div>
      <h3>History</h3>
      <ul className="list" id="list">
        {transactions.map((item , index) => { 
            return <Transaction key={index} transaction={item}/>
        })}
      </ul>
    </div>
  );
};
