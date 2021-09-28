import React, {useState} from 'react';
import fakeData from "../../fakeData";
import "./shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {addToDatabaseCart} from "../../utilities/databaseManager";

const Shop = () => {

    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCard] = useState([]);

    const handleAddProduct = (products) => {
        //console.log("Product Added", products)
        const newCart = [...cart,products];
        setCard(newCart);
        const sameProduct = newCart.filter( pd => pd.key === products.key);
        const count = sameProduct.length;
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