import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const getProductById = async (id: string) => {
  const { data } = await axios.get(BASE_URL + "/" + id);
  return data;
};
