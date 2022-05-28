import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryItemDetail.css';

const InventoryItemDetail = () => {

  const { id } = useParams();

  const [inventory, setInventory] = useState({});


  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setInventory(data));
  }, [])

  return (
    <div className='inventory-item-detail-container'>
    <img src={inventory.image} alt="car pic" />
    <h4>{inventory.name} </h4>
    <h6 className='py-3'>Product Id: {inventory._id} </h6>
    <p>Price: {inventory.price}</p>
    <p>Product Quantity: {inventory.productQuantity}</p>
    <p>Supplier Name: {inventory.supplierName}</p>
    <p> <small>{inventory.description}</small> </p>
    <button className='update-stock-btn'> Delivered </button>
  </div>
  );
};

export default InventoryItemDetail;