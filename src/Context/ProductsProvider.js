import React from "react";
import { useContext, useReducer, useEffect } from "react";
import reducer from "../Reducers/ProductReducer";
import axios from "axios";
import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../Actions";
const products_url = "https://course-api.com/react-store-products";
const initialstate = {
  isSideBarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},
};
const ProductsContext = React.createContext();
const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };
  const getProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const Products = response.data;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: Products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
      console.log(error);
    }
  };
  const getSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const Product = response.data;

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: Product });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts(products_url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, getSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
export default ProductsProvider;
