import { createContext, useState } from "react";
import { BPRODUCTS } from "../boysproducts";

export const ShopContext = createContext(null);


// automatiser les modifications duyalek
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < BPRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());


  //Pour afficher les montants duyal ch7al mn click d koula produit
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const contextValue = {
    cartItems,
    addToCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
