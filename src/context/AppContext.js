/* eslint-disable react/prop-types */
import React, {createContext, useReducer} from 'react';

export const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const AppContext = createContext();
const initialState = {
};
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        value: state.value,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
