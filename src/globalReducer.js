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
};

export default reducer;
