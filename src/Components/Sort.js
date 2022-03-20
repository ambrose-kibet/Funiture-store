import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import { BsGridFill, BsList } from "react-icons/bs";
const Sort = () => {
  const {
    filtered_products,
    getGridView,
    getListView,
    grid_veiw,
    sortItems,
    sort,
  } = useFilterContext();
  return (
    <div className="sort-container">
      <div className="grid-btns">
        <button
          className={grid_veiw ? "grid-btn active-view" : "grid-btn"}
          onClick={getGridView}
        >
          <BsGridFill />
        </button>
        <button
          className={grid_veiw ? "grid-btn " : "grid-btn active-view"}
          onClick={getListView}
        >
          <BsList />
        </button>
      </div>

      <p>{filtered_products.length} products found</p>
      <div>
        <hr />
      </div>
      <div className="sort-by">
        <p> sort by</p>
        <form>
          <select
            name="sort"
            className="select"
            value={sort}
            onChange={(e) => sortItems(e)}
          >
            <option value={"price-lowest"}>Price (Lowest)</option>
            <option value={"price-highest"}>Price (Highest)</option>
            <option value={"name-a"}>Name (A-Z)</option>
            <option value={"name-z"}>Name (Z-A)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
