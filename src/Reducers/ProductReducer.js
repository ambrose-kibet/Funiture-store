import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
} from "../Actions";

const ProductReducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSideBarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSideBarOpen: false };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, productsLoading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    let featured = action.payload.filter((item) => item.featured);

    return {
      ...state,
      products: action.payload,
      productsLoading: false,
      featuredProducts: featured,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, productsError: true, productsLoading: false };
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, singleProductLoading: true, singleProductError: false };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      singleProduct: action.payload,
      singleProductLoading: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, singleProductError: true, singleProductLoading: false };
  }
  throw new Error(`No matching '${action.type}' action type`);
};

export default ProductReducer;
