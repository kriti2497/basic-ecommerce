import "./App.css";

import { ActionType, IReducerState } from "./interfaces/interface";
import { Reducer, useReducer } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import { cartReducer } from "./reducers/cartReducer";

function App() {
  const initialState: IReducerState = {
    productsData: [],
    cartData: [],
  };
  const [state, dispatch] = useReducer<Reducer<IReducerState, ActionType>>(
    cartReducer,
    initialState
  );

  return (
    <Router>
      <Header cartItems={state.cartData} />
      <Routes>
        <Route path="/" element={<Home state={state} dispatch={dispatch} />} />
        <Route
          path="/my-cart"
          element={<Cart cartItems={state.cartData} dispatch={dispatch} />}
        />
        <Route
          path="/detail/:id"
          element={
            <ProductDetail cartItems={state.cartData} dispatch={dispatch} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
