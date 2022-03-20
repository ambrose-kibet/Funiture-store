import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import { formatPrice, getUniqueValues } from "../utils";
import { FaCheck } from "react-icons/fa";
const Filters = () => {
  const {
    updateFilters,
    clearFilters,
    all_products,
    filters: {
      text,
      category,
      company,
      colors,
      price,
      min_price,
      max_price,
      shipping,
    },
  } = useFilterContext();
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const color = getUniqueValues(all_products, "colors");

  return (
    <div className="filters-container">
      <form className="filter-form">
        <div className="form-control">
          <input
            type={"text"}
            name="text"
            placeholder="search"
            className="search-input"
            value={text}
            onChange={updateFilters}
          />
        </div>
      </form>
      <div className="categories-container">
        <h5>Category</h5>
        {categories.map((cat, index) => {
          return (
            <button
              key={index}
              className={
                category === cat.toLowerCase() ? "category-active" : null
              }
              onClick={updateFilters}
              type="button"
              name="category"
            >
              {cat}
            </button>
          );
        })}
      </div>

      <form className="categories-container">
        <label htmlFor="company" className="label">
          Company
        </label>
        <select
          className="select company-select"
          name="company"
          value={company}
          onChange={updateFilters}
        >
          {companies.map((company, index) => {
            return (
              <option key={index} value={company}>
                {company}
              </option>
            );
          })}
        </select>
      </form>
      <div className="colors-container">
        <h5>Colors</h5>
        <div className="all-colors">
          {color.map((col, index) => {
            if (col === "all") {
              return (
                <button
                  key={index}
                  className={
                    colors === col.toLowerCase()
                      ? " all-btn all-active"
                      : "all-btn"
                  }
                  onClick={updateFilters}
                  type="button"
                  name="colors"
                  data-color={col}
                >
                  {col}
                </button>
              );
            }
            return (
              <button
                key={index}
                style={{ background: `${col}` }}
                className={
                  colors === col.toLowerCase()
                    ? " color-btn color-active "
                    : "  color-btn"
                }
                onClick={updateFilters}
                type="button"
                name="colors"
                data-color={col}
              >
                {colors === col.toLowerCase() && (
                  <FaCheck className="color-icon" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="categories-container">
        <h5>Price</h5>
        <p className="price">{formatPrice(price)}</p>
        <input
          type="range"
          name="price"
          value={price}
          onChange={updateFilters}
          min={min_price}
          max={max_price}
        />
      </div>
      <div className="shipping-container">
        <label htmlFor="shipping" className="label">
          Free Shipping
        </label>
        <input
          type="checkbox"
          name="shipping"
          id="shipping"
          onChange={updateFilters}
          checked={shipping}
        />
      </div>
      <button type="button" onClick={clearFilters} className="clear-filters">
        Clear filters
      </button>
    </div>
  );
};

export default Filters;
