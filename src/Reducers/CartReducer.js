import {
  GET_CART_TOTALS,
  CLEAR_CART,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../Actions";
const CartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;

    const tempProduct = state.cart.find((i) => i.id === id + color);
    if (tempProduct) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        color,
        amount,
        image: product.images[0].url,
        name: product.name,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const id = action.payload;
    let newCart = state.cart.filter((item) => item.id !== id);

    return { ...state, cart: newCart };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, amount, max, condition } = action.payload;
    let newCart = state.cart.map((item) => {
      if (item.id === id && condition === "increase") {
        let newAmount = amount + 1;
        if (newAmount > max) {
          newAmount = max;
        }
        return { ...item, amount: newAmount };
      }
      if (item.id === id && condition === "decrease") {
        let newAmount = amount - 1;
        if (newAmount < 1) {
          newAmount = 1;
        }
        return { ...item, amount: newAmount };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }
  if (action.type === GET_CART_TOTALS) {
    let { item_sum, cart_sum } = state.cart.reduce(
      (totals, item) => {
        let cartsum = item.amount * item.price;
        totals.item_sum += item.amount;
        totals.cart_sum += cartsum;
        return totals;
      },
      { item_sum: 0, cart_sum: 0 }
    );
    return { ...state, total_items: item_sum, total_amount: cart_sum };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  throw new Error(`No matching ' ${action.type}' action type`);
};

export default CartReducer;
