import React from "react";
import './Product.css'

const Product = ({ name, price, image, description }) => {
  return (
    <div className="product">
        <h2 className="product-name">{name}</h2>
        <img className="product-img" src={image} alt={`${name} product`} />
        <p className="product-description">{description}</p>
        <p className="product-price">Price: ${price}</p>
    </div>
  );
};

export default Product;
