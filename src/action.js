const setFetchedData = (data) => ({
  type: "SET_FETCHED_DATA",
  payload: data,
});

const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

const setShowProduct = (products) => ({
  type: "SET_SHOW_PRODUCT",
  payload: products,
});

const setSearch = (keyword) => ({
  type: "SET_SEARCH",
  payload: keyword,
});

const addItemToCart = (item) => ({
  type: "ADD_ITEM_TO_CART",
  payload: item,
});

const removeItemToCart = (item) => ({
  type: "REMOVE_ITEM_TO_CART",
  payload: item,
});

const addItemToFavourite = (item) => ({
  type: "ADD_ITEM_TO_FAVOURITE",
  payload: item,
});

const removeItemToFavourite = (item) => ({
  type: "REMOVE_ITEM_TO_FAVOURITE",
  payload: item,
});

module.exports = {
  setFetchedData,
  setFilter,
  setShowProduct,
  setSearch,
  addItemToCart,
  addItemToFavourite,
  removeItemToCart,
  removeItemToFavourite,
};
