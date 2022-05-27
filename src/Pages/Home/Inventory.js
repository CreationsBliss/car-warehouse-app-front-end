import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ inventory }) => {

  const { _id, name, image, price, description, productQuantity, supplierName } = inventory;

  const navigate = useNavigate();

  const navigateToInventoryItemDetail = id => {
    navigate(`/inventory/${id}`);
  }

  return (
    <div className='inventory-container'>
      <img src={image} alt="car pic" />
      <h4>{name} </h4>
      <p>Price: {price}</p>
      <p>Product Quantity: {productQuantity}</p>
      <p>Supplier Name: {supplierName}</p>
      <p> <small>{description}</small> </p>
      <button onClick={() => navigateToInventoryItemDetail(_id)} className='update-stock-btn'> Stock Update </button>
    </div>
  );
};

export default Inventory;