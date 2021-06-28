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
};

export default reducer;
