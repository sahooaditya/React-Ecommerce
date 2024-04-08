import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListViews from "./ListViews";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  // console.log("aditya profdud", products);
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        sorry,no products matched your search ....
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListViews products={products} />;
  }
  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
