import React, {useEffect, useState} from 'react';
import {getDatabaseCart, removeFromDatabaseCart} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";

const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct = (productKey) => {
        //console.log(productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            //console.log(product);
            return product;
        },[]);
        //console.log(counts);
        setCart(cartProducts);
    },[]);
    return (
        <div className="shop-container">
            <div className="product-container">
                <h1>Cart Item: {cart.length}</h1>
                {
                    cart.map(pd=> <ReviewItem
                        key={pd.key}
                        product={pd}
                        removeProduct = {removeProduct}
                    >
                    </ReviewItem>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>

                </Cart>
            </div>
        </div>
    );
};

export default Review;