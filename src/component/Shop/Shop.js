import React, {useEffect, useState} from 'react';
import fakeData from "../../fakeData";
import "./shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {addToDatabaseCart, getDatabaseCart} from "../../utilities/databaseManager";

const Shop = () => {

    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCard] = useState([]);

    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const  productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map( existKey => {
            const product = fakeData.find( pd => pd.key === existKey)
            product.quantity = savedCart[existKey];
            return product;
        })
        //console.log(productKeys);
        setCard(previousCart);
    } ,[])

    const handleAddProduct = (products) => {
        const toBeAddedKey = products.key;
        const sameProduct = cart.find( pd => pd.key === toBeAddedKey); //same product count kore tar 1ta array dibe
        //console.log("cart",cart +    "same Product",sameProduct);
        let count = 1;
        let newCart;
        if (sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            products.quantity = 1;
            newCart = [...cart,products];
        }
        setCard(newCart);
        addToDatabaseCart(products.key, count);
    };
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(
                        (product) =>
                            <Product
                                key={product.key}
                                showAddToCart={true}
                                handleAddProduct = {handleAddProduct}
                                product={product}>
                            </Product>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                </Cart>
            </div>
        </div>
    );
};

export default Shop;