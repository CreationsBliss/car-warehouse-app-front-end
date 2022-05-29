import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './InventoryItemDetail.css';
import { useForm } from "react-hook-form";

const InventoryItemDetail = () => {

  const { id } = useParams();
  const [inventory, setInventory] = useState({});


  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setInventory(data));
  }, []);


  // Restock 
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const totalQuantity = parseFloat(data.quantity) + parseFloat(inventory.productQuantity);

    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ totalQuantity })
    })
      .then(res => res.json())
      .then(data => {
        toast('Quantity Updated')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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


      {/* Restock Product Quantity */}
      <div>
        {/* <button>Delivered</button> */}
        <div className='update-uqantity-field-container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="number" {...register("quantity")} placeholder="Number of Quantity" className='inputQuantityField' />
            <input type="submit" className='update-stock-btn' value="Add Product" />
          </form>

          <ToastContainer />

        </div>
      </div>


      <div>
        <Link to='/manageInventory' className='manage-inventories-btn'> Manage Inventories</Link>
      </div>
    </div>
  );
};

export default InventoryItemDetail;