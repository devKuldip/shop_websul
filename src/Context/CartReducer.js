export const CartReducer = (state, action) => {
  const { products } = state;
  console.log(products);

  let newproduct;
  // let index;
  // let updatedPrice;
  // let updatedQty;
  // let filtered;

  switch (action.type) {
    case "ADD_TO_CART":
      // console.log(products, action);
      newproduct = action.addProduct;
      const check = products.find((cart) => cart.id === newproduct.id);
      if (check) {
        return state;
      } else {
      //   product = action.product;
      //   product["qty"] = 1;
      //   updatedQty = qty + 1;
      //   updatedPrice = totalPrice + product.price;
      return {
        // ...products,
        products: [...products, newproduct],
      };
    }

    default:
      return state;
  }
};
// https://github.com/sami-ul-haq/ecommerce-store-react-context-api/blob/master/src/GlobalState/CartReducer.js
