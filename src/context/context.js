 import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

//const initialState = [{amount: 5, category: 'Savings', type: 'Income', date: '19-07-2000'}];
const initialState = JSON.parse(localStorage.getItem('transactions')) || [
  {
      "amount": 1000,
      "category": "Travel",
      "type": "Expense",
      "date": "2022-08-04",
      "id": "7678f1de-cebd-4978-a717-6ad5476f8a76"
  },
  {
      "amount": 75,
      "category": "House",
      "type": "Expense",
      "date": "2022-08-02",
      "id": "d84e8d6d-9dbe-4389-81da-b585acc4769b"
  },
  {
      "amount": 40,
      "category": "Business",
      "type": "Income",
      "date": "2022-07-29",
      "id": "cc4489c9-f09b-4c01-add9-17391fcd2568"
  },
  {
      "amount": 1000,
      "category": "",
      "type": "Income",
      "date": "2022-08-04",
      "id": "13a76305-2cee-4b1c-bede-6afd7be10a18"
  },
  {
      "amount": 400,
      "category": "Deposits",
      "type": "Income",
      "date": "2022-07-12",
      "id": "a1f2e2a0-db39-4ce1-98bc-02fea5775a3c"
  },
  {
      "amount": 0,
      "category": "",
      "type": "Income",
      "date": "2022-07-29",
      "id": "d07221a1-2814-46a5-984e-872e7bb7baea"
  },
  {
      "amount": 0,
      "category": "",
      "type": "Income",
      "date": "2022-07-29",
      "id": "a03233bb-659b-4d55-812a-5be67fb157c6"
  },
  {
      "amount": 50,
      "category": "Travel",
      "type": "Expense",
      "date": "2022-08-01",
      "id": "e4cdc300-0eda-4992-a9c3-b4d11d552fc1"
  },
  {
      "amount": 1000,
      "category": "Salary",
      "type": "Income",
      "date": "2022-08-01",
      "id": "7b482afb-7a97-4fb7-93d3-e4368f23b871"
  },
  {
      "amount": 1000,
      "category": "Salary",
      "type": "Income",
      "date": "2022-08-01",
      "id": "baa73835-9bba-41da-b867-535efddb4a61"
  }
];

 export const ExpenseTrackerContext = createContext(initialState);

 export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  
  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  console.log(transactions);
  const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

  return (
    <ExpenseTrackerContext.Provider value = {{
      deleteTransaction,
      addTransaction,
      transactions,
      balance
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
