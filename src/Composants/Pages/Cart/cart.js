import React,{useContext} from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import './cart.css'


export const Cart = () =>{
  const { cartItems ,gettotal } = useContext(ShopContext);
  const totalAmount = gettotal()
    return (
        <div className="cart">
            <div> <h1>Man's products</h1></div>
            <div className="cartItems">
                {PRODUCTS.map((Product)=>{
                        if (cartItems[Product.id] !== 0){
                            return <CartItem data={Product}/>
                        }
                })}
            </div>
            <div className="chekout">
                <h2> - Total :   {totalAmount}  MAD</h2>
            </div>
        </div>
    );

};