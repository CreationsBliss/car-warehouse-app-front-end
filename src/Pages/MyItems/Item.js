import React from 'react';

const Item = ({ item }) => {

  const { _id, name, image, price, description, productQuantity, supplierName } = item;


  const handleItemDelete = id =>{
    const proceed = window.confirm('Do you want to delete?');
    if(proceed){
      console.log('Item deleted with id',  id);
      const url = `http://localhost:5000/item/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      } )
    }
  }

  return (
    <div class="card mb-3" >
      <div class="row g-0">
        <div class="col-md-4">
          <img src={image} class="img-fluid rounded-start" alt="item pic" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
          <h4 className='card-title'>{name} </h4>
            <h6 className="py-2">{_id}</h6>
            <p className='card-text'>Price: {price}</p>
            <p className='card-text'>Product Quantity: {productQuantity}</p>
            <p className='card-text'>Supplier Name: {supplierName}</p>
            <p> <small>{description}</small> </p>
            <button onClick={()=> handleItemDelete(_id)} className='btn btn-danger'> Delete </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;