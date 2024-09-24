import { ActionType, IReducerState } from "../interfaces/interface";

import ProductItem from "./ProductItem";

const ProductListing: React.FC<{
  state: IReducerState;
  dispatch: React.Dispatch<ActionType>;
}> = ({ state, dispatch }) => {
  const { productsData } = state;

  return (
    <div className="p-6">
      <h1 className="mb-4 font-medium">Browse our products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {productsData.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            cartQty={
              state.cartData.find((item) => item.product.id === product.id)
                ?.quantity
            }
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
