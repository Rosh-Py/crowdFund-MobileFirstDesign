const reducer = (state, action) => {
  if (action.type === "OPEN_NAV_MODAL") {
    return { ...state, isNavModalOpen: true };
  }
  if (action.type === "CLOSE_NAV_MODAL") {
    return { ...state, isNavModalOpen: false };
  }
};

export default reducer;
