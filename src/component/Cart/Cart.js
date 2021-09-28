import React from 'react';
import {Link} from "react-router-dom";

const Cart = (props) => {
    const {cart} = props;
    // const total = cart.reduce((total, cart) => total + cart.price , 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shippingCost = 0;
    if(total > 35){
        shippingCost = 0;
    }else if (total > 15){
        shippingCost = 4.99;
    }
    else if (total > 0){
        shippingCost = 12.99
    }

    const tax = Math.round(total / 10).toPrecision(2);
    const grandTotal = total + shippingCost + Number(tax);
    return (
        <div>
            <h4 className="text-danger">Order Summery</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Shipping Cost: {shippingCost}</small></p>
            <p><small>Vat + Tax: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            <Link to="/review">
                <button className="main-btn">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;