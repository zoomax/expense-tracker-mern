import React from "react";
import { Header } from "./components/header/header";
import { Balance } from "./components/balance/balance";
import "./App.css";
import { IncomeExpenses } from "./components/income-expenses/income-expenses";
import {TransactionList} from  "./components/transactionList/transactionList" ; 
import { AddTransaction } from "./components/add-transaction/addTransaction";
import {GlobalProvider} from "./global-state/globalState"


function App() {
  return (
    <div className="App">
     <GlobalProvider>
     <Header/>
      <div className="container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList/>
        <AddTransaction/>
      </div>
     </GlobalProvider>
    </div>
  );
}

export default App;
