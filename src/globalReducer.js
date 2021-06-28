const reducer = (state, action) => {
  if (action.type === "OPEN_NAV_MODAL") {
    return { ...state, isNavModalOpen: true };
  }
  if (action.type === "CLOSE_NAV_MODAL") {
    return { ...state, isNavModalOpen: false };
  }
  if (action.type === "OPEN_THANKS_MODAL") {
    return { ...state, isThanksModalOpen: true };
  }
  if (action.type === "CLOSE_THANKS_MODAL") {
    return { ...state, isThanksModalOpen: false };
  }
  if (action.type === "OPEN_PLEDGE_MODAL") {
    return { ...state, isPledgeModalOpen: true };
  }
  if (action.type === "CLOSE_PLEDGE_MODAL") {
    return { ...state, isPledgeModalOpen: false };
  }
  if (action.type === "SELECT_PLEDGE") {
    return { ...state, pledgeSelected: action.payload };
  }
  if (action.type === "SHOW_ALERT_MODAL") {
    return { ...state, isAlertModalOpen: true };
  }
  if (action.type === "HIDE_ALERT_MODAL") {
    return { ...state, isAlertModalOpen: true };
  }
  if (action.type === "UPDATE_CURRENT_AMOUNT") {
    const temp = JSON.parse(JSON.stringify(state.backersDetails));
    temp.amount.current =
      parseInt(state.backersDetails.amount.current) + parseInt(action.payload);
    return { ...state, backersDetails: temp };
  }
  if (action.type === "UPDATE_BACKERS") {
    const temp = JSON.parse(JSON.stringify(state.backersDetails));
    temp.backers = parseInt(state.backersDetails.backers) + 1;
    return { ...state, backersDetails: temp };
  }
  if (action.type === "UPDATE_REWARDS_STOCK") {
    const rewards = JSON.parse(JSON.stringify(state.pledgeRewards));
    const idx = rewards.findIndex((a) => a.title === action.payload);
    let reward = rewards[idx];
    reward.stock = parseInt(reward.stock) - 1;
    return { ...state, pledgeRewards: rewards };
  }
};

export default reducer;
