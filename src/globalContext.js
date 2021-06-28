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
  pledgeRewards: [
    {
      title: "Bamboo Stand",
      minAmount: 25,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      stock: 101,
    },
    {
      title: "Black Edition Stand",
      minAmount: 75,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      stock: 64,
    },
    {
      title: "Mahogany Special Edition",
      minAmount: 200,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      stock: 0,
    },
  ],
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
  const updateRewardsStock = (reward) => {
    dispatch({ type: "UPDATE_REWARDS_STOCK", payload: reward });
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
        updateRewardsStock,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
