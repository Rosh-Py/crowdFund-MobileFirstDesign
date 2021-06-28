import React, { useContext, useReducer } from "react";
import reducer from "./globalReducer";

const GlobalContext = React.createContext();

const initialState = {
  isNavModalOpen: false,
  isThanksModalOpen: false,
  isPledgeModalOpen: false,
  pledgeSelected: "",
  isAlertModalOpen: false,
  backersDetails: {
    amount: { current: 89914, target: 100000 },
    backers: 5007,
    daysLeft: 56,
  },
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

  const showAlertModal = () => {
    dispatch({ type: "SHOW_ALERT_MODAL" });
  };
  const hideAlertModal = () => {
    dispatch({ type: "HIDE_ALERT_MODAL" });
  };
  const updateCurrentAmount = (amount) => {
    dispatch({ type: "UPDATE_CURRENT_AMOUNT", payload: amount });
  };
  const updateBackers = () => {
    dispatch({ type: "UPDATE_BACKERS" });
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
        showAlertModal,
        hideAlertModal,
        updateCurrentAmount,
        updateBackers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
