import React from 'react';
import { useForm } from "react-hook-form";
import './AddInventoryItem.css'

const AddInventoryItem = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = `http://localhost:5000/inventory/`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      console.log(result);
    })
  };

  return (
    <div className='w-50 mx-auto py-5'>
      <h1 className='pb-5 text-center'>Add Inventory Item</h1>
      <form className='d-flex flex-column add-item-form' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-2' placeholder='Product image url' type="text" {...register("image")} />
        <input className='mb-2' placeholder='Product name' {...register("name", { required: true, maxLength: 20 })} />
        <input className='mb-2' placeholder='Product price' type="number" {...register("price")} />
        <input className='mb-2' placeholder='Product quantity' {...register("productQuantity")} />
        <input className='mb-2' placeholder='Supplier name' {...register("supplierName")} />
        <textarea className='mb-2' placeholder='Product description' {...register("description")} />
        <input type="submit" value="Add Item" className='about-us-btn' />
      </form>
    </div>
  );
};

export default AddInventoryItem;