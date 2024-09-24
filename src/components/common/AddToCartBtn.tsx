import { ActionType, IProduct } from "../../interfaces/interface";

import { addToCartHandler } from "../../reducers/cartActions";

const AddToCartBtn: React.FC<{
  product: IProduct;
  dispatch: React.Dispatch<ActionType>;
}> = ({ product, dispatch }) => {
  return (
    <button
      className="bg-white max-w-60 border text-gray-700 border-gray-700 hover:bg-primary hover:border-primary hover:text-white p-2 rounded w-full cursor-pointer transition-all duration-300"
      onClick={() => addToCartHandler(product, dispatch)}
    >
      <i className="fa-solid fa-cart-plus"></i>
      &nbsp; Add to cart
    </button>
  );
};

export default AddToCartBtn;
