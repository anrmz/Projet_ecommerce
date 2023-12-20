import { createContext, useState } from "react";
import { PRODUCTS } from "../products";


export const ShopContext = createContext(null);


// automatiser les modifications duyalek
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const gettotal =() => {
    let totalAmount = 0;
    for (const item in cartItems){
        if (cartItems[item] > 0){
          let iteminfo = PRODUCTS.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * iteminfo.price
        }
    }
    return totalAmount;
  };

  //Pour afficher les montants duyal ch7al mn click d koula produit
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateToCart = (newAmount,itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount}));
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeToCart,
    updateToCart ,
    gettotal
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
