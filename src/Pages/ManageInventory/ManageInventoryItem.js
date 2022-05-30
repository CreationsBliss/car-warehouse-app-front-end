import React, { useEffect, useState } from 'react';
// import useInventories from '../../hooks/useInventories';

const ManageInventoryItem = ({ inventory }) => {

  // const [inventories, setInventories] = useInventories();

  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch('https://protected-meadow-91560.herokuapp.com/inventory')
      .then(res => res.json())
      .then(data => setInventories(data));
  }, [inventories]);

  const { _id, name, image, price, description, productQuantity, supplierName } = inventory;

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `https://protected-meadow-91560.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = inventories.filter(inventory => inventory._id !== id);
          setInventories(remaining);
        })
    }
  }

  return (
    <div class="card p-2">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={image} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 className='card-title'>{name} </h4>
            <h6 className="py-2">{_id}</h6>
            <p className='card-text'>Price: {price}</p>
            <p className='card-text'>Product Quantity: {productQuantity}</p>
            <p className='card-text'>Supplier Name: {supplierName}</p>
            <p> <small>{description}</small> </p>
            <button onClick={() => handleDelete(_id)} className='btn btn-danger'> Delete </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventoryItem;