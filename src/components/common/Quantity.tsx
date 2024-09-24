import { ActionType, IProduct } from "../../interfaces/interface";
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "../../reducers/cartActions";

const Quantity: React.FC<{
  product: IProduct;
  dispatch: React.Dispatch<ActionType>;
  quantity: number;
}> = ({ product, dispatch, quantity }) => {
  return (
    <div className="flex  text-gray-700  justify-center">
      <button
        onClick={() => decrementQuantity(product, dispatch)}
        className="px-3 cursor-pointer rounded-full hover:bg-gray-100"
      >
        <i className="fa-solid fa-minus"></i>
      </button>
      <p className=" px-5 py-2">{quantity}</p>
      <button
        onClick={() => incrementQuantity(product, dispatch)}
        className="px-3 cursor-pointer rounded-full hover:bg-gray-100"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
      <button
        onClick={() => removeProduct(product, dispatch)}
        className="px-3 cursor-pointer rounded-full hover:bg-gray-100"
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default Quantity;
