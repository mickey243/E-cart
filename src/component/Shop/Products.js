import React from "react";
import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Samsung s10",
  },
  {
    id: "p2",
    price: 5,
    title: "Readmi",
  },
  {
    id: "p3",
    price: 5,
    title: "Realme",
  },
];

const Products = () => {
  return (
    <div>
      {DUMMY_PRODUCTS.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
