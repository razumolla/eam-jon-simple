import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {handleAddToCart,product } = props;
    const { img, name, price, ratings, seller } =product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p> <small>Seller: {seller} </small>  </p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'> Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}  > </FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;