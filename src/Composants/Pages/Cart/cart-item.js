import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";



export const CartItem = (props) =>{
  const { id, productName, price, productImage } = props.data;
  const { cartItems ,addToCart ,removeToCart,updateToCart  } = useContext(ShopContext);


    return(
        <div className="cartItem">
            <img src={productImage} alt="desc"  className="prdImg"/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> {price} MAD</p>
      </div>
      <div className="counter">
          <button onClick={() => addToCart(id)}> + </button>
          <input value={cartItems[id]} onChange={(e) => updateToCart(Number(e.target.value),id)} />
          <button onClick={() => removeToCart(id)}> - </button>

      </div>
        </div>
    )
}