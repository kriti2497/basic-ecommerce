import { ActionType, ICartItem } from "../interfaces/interface";

import { Link } from "react-router-dom";
import Quantity from "./common/Quantity";
import React from "react";

const CartItem: React.FC<{
  cartItem: ICartItem;
  dispatch: React.Dispatch<ActionType>;
}> = ({ cartItem, dispatch }) => {
  const { product, quantity } = cartItem;

  return (
    <>
      <div className="px-5 py-6 flex w-full justify-between">
        <Link to={`/detail/${product.id}`} className="flex gap-7">
          <div className="w-24 flex justify-center">
            <img
              src={product.image}
              className="h-32 w-full object-contain"
              alt="cart_item"
            />
          </div>
          <div>
            <p className=" cursor-pointer text-base" title={product.title}>
              {product.title}
            </p>
            <p className="text-sm font-semibold">${product.price}</p>
          </div>
        </Link>
        <div>
          <Quantity dispatch={dispatch} product={product} quantity={quantity} />
        </div>
      </div>
      <hr className="w-3/4 mx-auto" />
    </>
  );
};

export default CartItem;
