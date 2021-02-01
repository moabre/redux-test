const initalModal = { edit: false, add: false };
const modalReducer = (state = initalModal, action) => {
  const { type } = action;

  switch (type) {
    case 'TOGGLE_ADD':
      return { ...state, add: !state.add };
    case 'TOGGLE_EDIT':
      return { ...state, edit: !state.edit };
    default:
      return state;
  }
};

export default modalReducer;
