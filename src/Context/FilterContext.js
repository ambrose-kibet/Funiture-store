import React, { createContext, useEffect } from "react";
import reducer from "../Reducers/FilterReducer";
import { useReducer, useContext } from "react";
import {
  LOAD_PRODUCTS,
  LIST_VIEW,
  GRID_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../Actions";
import { useProductsContext } from "./ProductsProvider";
const FilterContext = createContext();
const initialState = {
  filtered_products: [],
  all_products: [],
  grid_veiw: true,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    colors: "all",
    price: 0,
    min_price: 0,
    max_price: 0,
    shipping: false,
  },
};
const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();
  const getListView = () => {
    dispatch({ type: LIST_VIEW });
  };
  const getGridView = () => {
    dispatch({ type: GRID_VIEW });
  };
  const sortItems = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "colors") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        getGridView,
        getListView,
        sortItems,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
export default FilterProvider;
