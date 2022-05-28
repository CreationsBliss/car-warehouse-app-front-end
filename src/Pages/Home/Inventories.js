import React, { useEffect, useState } from 'react';
import Inventory from './Inventory';
import './Inventories.css';
import { Link } from 'react-router-dom';

const Inventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/inventory')
      .then(res => res.json())
      .then(data => setInventories(data));
  }, []);

  return (
    <div className='inventories-area'>
      <div className='container py-5 text-center'>
        <h1>Recent Cars </h1>
        <p className='lead'>Delearship available for new stylish car</p>
        <div className="inventories-container mt-5">
          {
            inventories.slice(0, 6).map(inventory => <Inventory key={inventory._id} inventory={inventory}></Inventory>)
          }
        </div>
        <div>
          <Link to='/manageInventory' className='manage-inventories-btn'> Manage Inventories</Link>
        </div>
      </div>
    </div>
  );
};

export default Inventories;