const initialState = {
  product: [],
  showProduct: [],
  filter: {},
  search: "",
  cart: [],
  favourite: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FETCHED_DATA":
      return {
        ...state,
        product: action.payload,
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "SET_SHOW_PRODUCT":
      return {
        ...state,
        showProduct: action.payload,
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "ADD_ITEM_TO_FAVOURITE":
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };

    case "REMOVE_ITEM_TO_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "REMOVE_ITEM_TO_FAVOURITE":
      return {
        ...state,
        favourite: state.favourite.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default reducer;
