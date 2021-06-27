import React, { useContext, useReducer } from "react";
import reducer from "./globalReducer";

const GlobalContext = React.createContext();

const initialState = { isNavModalOpen: false };

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openNavModal = () => {
    dispatch({ type: "OPEN_NAV_MODAL" });
  };
  const closeNavModal = () => {
    dispatch({ type: "CLOSE_NAV_MODAL" });
  };
  return (
    <GlobalContext.Provider value={{ ...state, openNavModal, closeNavModal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
