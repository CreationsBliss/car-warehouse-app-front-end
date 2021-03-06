import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useInventories from '../../hooks/useInventories';
import './ManageInventory.css'
import ManageInventoryItem from './ManageInventoryItem';

const ManageInventory = () => {

  // const [inventories] = useInventories();

  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch('https://protected-meadow-91560.herokuapp.com/inventory')
      .then(res => res.json())
      .then(data => setInventories(data));
  }, [inventories]);


  return (
    <div className='container pb-5'>
      <h1 className='my-5 text-center'>Manage Inventory Items</h1>
      <div className="manage-inventory-items">
        {
          inventories.map(inventory => <ManageInventoryItem key={inventory._id} inventory={inventory}></ManageInventoryItem>)
        }
      </div>
      <div className='mt-5 text-center'>
        <Link to="/addInventoryItem" className='manage-inventories-btn'> Add New Item </Link>
      </div>
    </div>
  );
};

export default ManageInventory;