import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";

const ProductItem = ({ title, price, id }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <div className="card">
      <div className="card-body"> Name : {title}</div>
      <div className="card-body"> Price : {price}</div>
      <button
        type="button"
        className="btn btn-warning"
        onClick={addToCartHandler}
      >
        add to cart
      </button>
    </div>
  );
};

export default ProductItem;
