import { createContext, useReducer } from 'react';
import appReducer from './appReducer.js';

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
