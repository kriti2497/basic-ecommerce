import { ActionType, IProduct } from "../interfaces/interface";

import AddToCartBtn from "./common/AddToCartBtn";
import { Link } from "react-router-dom";
import Quantity from "./common/Quantity";

const ProductItem: React.FC<{
  product: IProduct;
  cartQty?: number;
  dispatch: React.Dispatch<ActionType>;
}> = ({ product, cartQty, dispatch }) => {
  return (
    <div className="p-5 border flex flex-col gap-4 justify-between rounded  hover:shadow-xl transition-all duration-300 max-w-60 sm:max-w-full mx-auto sm:mx-0">
      <Link
        className="flex flex-col gap-4 justify-between cursor-pointer"
        to={`/detail/${product.id}`}
      >
        <div className="flex justify-center my-7">
          <img
            src={product.image}
            alt="product"
            className="h-32 cursor-pointer"
          />
        </div>
        <div>
          <p
            className="truncate cursor-pointer text-base"
            title={product.title}
          >
            {product.title}
          </p>
          <p className="text-sm font-semibold">${product.price}</p>
        </div>
      </Link>
      <hr />

      {cartQty ? (
        <Quantity dispatch={dispatch} product={product} quantity={cartQty} />
      ) : (
        <div className="flex justify-center">
          <AddToCartBtn product={product} dispatch={dispatch} />
        </div>
      )}
    </div>
  );
};

export default ProductItem;
