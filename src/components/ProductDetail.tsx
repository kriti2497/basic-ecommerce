import { ActionType, ICartItem, IProduct } from "../interfaces/interface";
import React, { useEffect, useState } from "react";

import AddToCartBtn from "./common/AddToCartBtn";
import Quantity from "./common/Quantity";
import { getProductById } from "../services/product";
import { useParams } from "react-router-dom";

const ProductDetail: React.FC<{
  cartItems: ICartItem[];
  dispatch: React.Dispatch<ActionType>;
}> = ({ cartItems, dispatch }) => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<IProduct>();
  const [currProductQty, setCurrProductQty] = useState(0);

  const fetchDetails = async (id: string) => {
    const response = await getProductById(id);
    setProduct(response);
    setLoading(false);
  };

  useEffect(() => {
    if (params && params.id) {
      fetchDetails(params.id);
    }
  }, [params]);

  useEffect(() => {
    if (product) {
      const prod = cartItems.find((each) => each.product.id === product.id);
      setCurrProductQty(prod?.quantity ?? 0);
    }
  }, [cartItems, product]);

  if (loading) {
    return <p className="text-center mt-20 ">Loading...</p>;
  }

  return product ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 p-5 pt-16 gap-4">
      <div className="mx-auto">
        <img src={product.image} alt="product" className="h-80 px-16" />
      </div>
      <div>
        <p className="font-medium text-lg mb-2">{product.title}</p>
        <p className=" text-gray-500">{product.description}</p>
        <p className="border border-gray-200 inline-block  text-sm mt-3 px-1 py-2">
          <span className="border-r px-2">
            {product.rating.rate}
            <i className="fa-solid fa-star ml-1 text-icon"></i>
          </span>

          <span className="px-2">{product.rating.count} ratings</span>
        </p>
        <hr className="mt-5" />
        <p className=" mt-5 font-semibold text-xl">${product.price}</p>
        {currProductQty ? (
          <div className="flex justify-start mt-5">
            <Quantity
              dispatch={dispatch}
              product={product}
              quantity={currProductQty}
            />
          </div>
        ) : (
          <div className="mt-3">
            <AddToCartBtn product={product} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  ) : (
    <p className="text-center mt-20 ">No product Found</p>
  );
};

export default ProductDetail;
