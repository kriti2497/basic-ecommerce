import { ActionType, ICartItem } from "../interfaces/interface";

import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart: React.FC<{
  cartItems: ICartItem[];
  dispatch: React.Dispatch<ActionType>;
}> = ({ cartItems, dispatch }) => {
  const total = cartItems.reduce((acc, curr) => {
    return acc + curr.product.price * curr.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="mt-48 flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-5">Hey! Your cart is empty.</h1>
        <Link
          to={"/"}
          className="text-2xl underline hover:text-primary font-medium"
        >
          Start shopping!
        </Link>
      </div>
    );
  }

  return (
    <div className="md:flex">
      <div className="md:w-4/5 overflow-auto md:h-[92vh] p-7">
        {cartItems.map((item) => (
          <CartItem cartItem={item} dispatch={dispatch} />
        ))}
      </div>
      <div className="p-5 py-10 md:w-1/5">
        <h1 className="font-extrabold text-xl mb-2">Your Cart</h1>
        <div className="flex justify-between mb-3">
          <p className="font-medium">Subtotal</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="font-medium">Discount</p>
          <p>0</p>
        </div>
        <hr />
        <div className="flex justify-between my-3">
          <p className="font-medium">Grand Total</p>
          <p>${total.toFixed(2)}</p>
        </div>

        <button
          disabled
          className="mt-5 bg-white max-w-60 border text-gray-700 border-gray-700 disabled:text-gray-400 disabled:border-gray-400 p-2 rounded w-full cursor-pointer transition-all duration-300"
        >
          <i className="fa-solid fa-bag-shopping mr-2"></i> Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
