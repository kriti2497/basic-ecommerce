import { ActionType, IProduct } from "../interfaces/interface";

import { CART_ACTIONS } from "./cartReducer";

export const addToCartHandler = (
  product: IProduct,
  dispatch: React.Dispatch<ActionType>
) => {
  dispatch({
    type: CART_ACTIONS.ADD_TO_CART,
    payload: product,
  });
};

export const incrementQuantity = (
  product: IProduct,
  dispatch: React.Dispatch<ActionType>
) => {
  dispatch({
    type: CART_ACTIONS.INCREMENT_CART,
    payload: product,
  });
};

export const decrementQuantity = (
  product: IProduct,
  dispatch: React.Dispatch<ActionType>
) => {
  dispatch({
    type: CART_ACTIONS.DECREMENT_CART,
    payload: product,
  });
};

export const removeProduct = (
  product: IProduct,
  dispatch: React.Dispatch<ActionType>
) => {
  dispatch({
    type: CART_ACTIONS.REMOVE_FROM_CART,
    payload: product,
  });
};
