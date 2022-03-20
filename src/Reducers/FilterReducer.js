import {
  LOAD_PRODUCTS,
  GRID_VIEW,
  LIST_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../Actions";
const FilterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, price: maxPrice, max_price: maxPrice },
    };
  }
  if (action.type === GRID_VIEW) {
    return { ...state, grid_veiw: true };
  }
  if (action.type === LIST_VIEW) {
    return { ...state, grid_veiw: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    let newProducts = state.filtered_products;
    if (state.sort === "price-lowest") {
      newProducts = newProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (state.sort === "price-highest") {
      newProducts = newProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (state.sort === "name-a") {
      newProducts = newProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (state.sort === "name-z") {
      newProducts = newProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: newProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, colors, price, shipping } = state.filters;
    let tempProducts = [...all_products];
    // text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    // category
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    // company
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }
    // colors
    if (colors !== "all") {
      tempProducts = tempProducts.filter((product) =>
        product.colors.includes(colors)
      );
    }
    // price
    if (price) {
      tempProducts = tempProducts.filter((product) => product.price <= price);
    }
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === shipping
      );
    }

    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        company: "all",
        colors: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  throw new Error(`no matching "${action.type}" action type`);
};

export default FilterReducer;
