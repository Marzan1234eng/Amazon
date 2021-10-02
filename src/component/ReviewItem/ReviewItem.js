import React from 'react';

const ReviewItem = (props) => {
     console.log(props);
    const {name, quantity, key, price} = props.product;
    const reviewItem = {
        borderBottom:"1px solid lightgray",
        margin:"5px",
        padding:"5px",
        marginLeft:"200px"
    }
    return (
        <div style={reviewItem} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <button
                className="main-btn"
                onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;