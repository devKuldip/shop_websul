import axios from "axios";

const baseUrl = "https://dummyjson.com/products"

export const fetchProducts = async () => {
  const response = await axios.get(baseUrl);
  const products = response.data.products;
  return products;
};

export const fetchCart = async () => {
  console.log("Fetching Cart");
  const response = await axios.get("https://dummyjson.com/carts/1");
  const cart = response.data.products;
  console.log("Cart: ", cart);
  return cart;
};