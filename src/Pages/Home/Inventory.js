import React from 'react';
import './Inventory.css'

const Inventory = ({ inventory }) => {

  const { name, image, price, description, productQuantity, supplierName } = inventory;

  return (
    <div className='inventory-container'>
      <img src={image} alt="car pic" />
      <h4>{name} </h4>
      <p>Price: {price}</p>
      <p>Product Quantity: {productQuantity}</p>
      <p>Supplier Name: {supplierName}</p>
      <p> <small>{description}</small> </p>
      <button className='update-stock-btn'> Stock Update </button>
    </div>
  );
};

export default Inventory;