import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "../Reducers/CartReducer";
import {
  GET_CART_TOTALS,
  CLEAR_CART,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../Actions";
const getlocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getlocalStorage(),
  total_items: 0,
  total_amount: 0,
  shippin_fees: 834,
};

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };
  // remove item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  // toggle AMount
  const toggleAmount = (id, amount, max, condition) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: { id, amount, max, condition },
    });
  };
  // clearCart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  useEffect(() => {
    dispatch({ type: GET_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};
export default CartProvider;
