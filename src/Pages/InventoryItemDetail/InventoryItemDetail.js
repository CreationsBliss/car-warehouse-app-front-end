import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryItemDetail = () => {

const {id} = useParams();

  return (
    <div>
      <h2> Welcome to Item Detail {id} </h2>
    </div>
  );
};

export default InventoryItemDetail;