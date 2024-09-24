/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IReducerState {
  productsData: IProduct[];
  cartData: ICartItem[];
}

export interface ActionType {
  type: string;
  payload?: any;
}
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
