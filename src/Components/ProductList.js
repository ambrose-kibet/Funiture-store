import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";
const ProductList = () => {
  const { filtered_products: products, grid_veiw } = useFilterContext();
  if (products.length < 1) {
    return (
      <div>
        <h5 style={{ textAlign: "center" }}>
          Sorry no items match your search criteria...
        </h5>
        ;
      </div>
    );
  }
  if (!grid_veiw) {
    return (
      <div>
        <ListView products={products} />;
      </div>
    );
  }
  return (
    <div>
      <GridView products={products} />
    </div>
  );
};

export default ProductList;
