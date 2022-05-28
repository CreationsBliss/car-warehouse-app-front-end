import React from 'react';

const ManageInventoryItem = ({ inventory }) => {

  const { _id, name, image, price, description, productQuantity, supplierName } = inventory;

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
            <button className='btn btn-danger'> Delete </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventoryItem;