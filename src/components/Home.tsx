import { ActionType, IReducerState } from "../interfaces/interface";

import { CART_ACTIONS } from "../reducers/cartReducer";
import ProductListing from "./ProductListing";
import { getProducts } from "../services/product";
import { useEffect } from "react";

const Home: React.FC<{
  state: IReducerState;
  dispatch: React.Dispatch<ActionType>;
}> = ({ state, dispatch }) => {
  const fetchData = async () => {
    const response = await getProducts();
    dispatch({ type: CART_ACTIONS.ADD_PRODUCT, payload: response });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ProductListing state={state} dispatch={dispatch} />
    </>
  );
};

export default Home;
