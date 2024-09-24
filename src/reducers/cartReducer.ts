import { ActionType, IProduct, IReducerState } from "../interfaces/interface";

export enum CART_ACTIONS {
  ADD_PRODUCT = "ADD_PRODUCT",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  INCREMENT_CART = "INCREMENT_CART",
  DECREMENT_CART = "DECREMENT_CART",
}

const addToCart = (state: IReducerState, product: IProduct) => {
  const id = product.id;
  const productExistsInCart = state.cartData.find(
    (product) => product.product.id === id
  );

  if (productExistsInCart) {
    return state;
  }

  localStorage.setItem(
    "cartData",
    JSON.stringify([{ product, quantity: 1 }, ...state.cartData])
  );

  return {
    ...state,
    cartData: [{ product, quantity: 1 }, ...state.cartData],
  };
};

const removeFromCart = (
  state: IReducerState,
  product: IProduct
): IReducerState => {
  const id = product.id;
  const productExistsInCart = state.cartData.find(
    (product) => product.product.id === id
  );

  if (!productExistsInCart) {
    return state;
  }

  const updatedCart = state.cartData.filter(
    (eachProduct) => eachProduct.product.id !== id
  );

  return { ...state, cartData: updatedCart };
};

const incrementCart = (state: IReducerState, product: IProduct) => {
  const id = product.id;
  const productExistsInCart = state.cartData.find(
    (product) => product.product.id === id
  );

  if (!productExistsInCart) {
    return state;
  }

  if (productExistsInCart.quantity === 10) {
    return state;
  }

  const updatedCart = state.cartData.map((eachProduct) => {
    if (eachProduct.product.id === id) {
      return {
        ...eachProduct,
        quantity: eachProduct.quantity + 1,
      };
    }
    return eachProduct;
  });

  return { ...state, cartData: updatedCart };
};

const decrementCart = (state: IReducerState, product: IProduct) => {
  const id = product.id;
  const productExistsInCart = state.cartData.find(
    (product) => product.product.id === id
  );

  if (!productExistsInCart) return state;

  // TODO: when cartqty is 1

  if (productExistsInCart.quantity === 1) {
    const updatedState = removeFromCart(state, product);
    return updatedState;
  }

  const updatedCart = state.cartData.map((eachProduct) => {
    if (eachProduct.product.id === id) {
      return {
        ...eachProduct,
        quantity: eachProduct.quantity - 1,
      };
    }
    return eachProduct;
  });

  return { ...state, cartData: updatedCart };
};

export const cartReducer = (
  state: IReducerState,
  action: ActionType
): IReducerState => {
  switch (action.type) {
    case CART_ACTIONS.ADD_PRODUCT:
      return { ...state, productsData: action.payload };

    case CART_ACTIONS.ADD_TO_CART:
      return addToCart(state, action.payload);

    case CART_ACTIONS.REMOVE_FROM_CART:
      return removeFromCart(state, action.payload);

    case CART_ACTIONS.INCREMENT_CART:
      return incrementCart(state, action.payload);

    case CART_ACTIONS.DECREMENT_CART:
      return decrementCart(state, action.payload);

    default:
      return state;
  }
};
