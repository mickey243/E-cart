import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
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
      <div className="card-body">Total number of product : {quantity}</div>
      <div className="card-body">{title}</div>
      <div className="card-body">{price}</div>
      <div className="cartItem_button text-center">
        <button
          type="button"
          class="btn btn-success"
          onClick={removeItemHandler}
        >
          -
        </button>
        <button type="button" class="btn btn-danger" onClick={addItemHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
