const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
};

export default reducer;
