import React, { useContext, useReducer } from "react";
import reducer from "./globalReducer";

const GlobalContext = React.createContext();

const initialState = {
  isNavModalOpen: false,
  isThanksModalOpen: false,
  isPledgeModalOpen: false,
  pledgeSelected: "",
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openNavModal = () => {
    dispatch({ type: "OPEN_NAV_MODAL" });
  };
  const closeNavModal = () => {
    dispatch({ type: "CLOSE_NAV_MODAL" });
  };

  const openThanksModal = () => {
    dispatch({ type: "OPEN_THANKS_MODAL" });
  };
  const closeThanksModal = () => {
    dispatch({ type: "CLOSE_THANKS_MODAL" });
  };
  const openPledgeModal = () => {
    dispatch({ type: "OPEN_PLEDGE_MODAL" });
  };
  const closePledgeModal = () => {
    dispatch({ type: "CLOSE_PLEDGE_MODAL" });
  };

  const selectPledge = (pledge) => {
    dispatch({ type: "SELECT_PLEDGE", payload: pledge });
  };
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        openNavModal,
        closeNavModal,
        openThanksModal,
        closeThanksModal,
        selectPledge,
        openPledgeModal,
        closePledgeModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
