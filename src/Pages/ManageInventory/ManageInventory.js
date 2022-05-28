import React from 'react';
import useInventories from '../../hooks/useInventories';
import './ManageInventory.css'
import ManageInventoryItem from './ManageInventoryItem';

const ManageInventory = () => {

  const [inventories] = useInventories();

  return (
    <div className='container pb-5'>
      <h1 className='my-5 text-center'>Manage Inventory Items</h1>
      <div className="manage-inventory-items">
        {
          inventories.map(inventory => <ManageInventoryItem key={inventory._id} inventory={inventory}></ManageInventoryItem>)
        }
      </div>
    </div>
  );
};

export default ManageInventory;