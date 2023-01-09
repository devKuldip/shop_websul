import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const cartContext = createContext();
const initialState = {
  products: []
  // {
  //   title: "car",
  //   qty: 1,
  // },
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    CartReducer,
    initialState
    //   {
    //   // shoppingCart: [],
    //   // totalPrice: 0,
    //   qty: 0,
    // }
  );
  return (
    <cartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
