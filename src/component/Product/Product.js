import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    /*console.log(props);*/
    const {product, handleAddProduct} = props;
    const {img, name , seller, price, stock} = product;


    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button
                    className="main-btn"
                    onClick={() => handleAddProduct(product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;