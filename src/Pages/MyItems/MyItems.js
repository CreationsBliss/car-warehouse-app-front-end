import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Item from './Item';

const MyItems = () => {

  const [user] = useAuthState(auth);
  const [items, setItems] = useState();

  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/item?email=${email}`;
      const { data } = await axios.get(url);
      setItems(data);
    }
    getItems();
  }, [user])

  return (
    <div className='container py-5'>
      <h1 className='text-center mb-5'>My Items: {items?.length} </h1>
      <div className="manage-inventory-items">
        {
          items?.map(item => <Item key={item._id} item={item}></Item>)
        }
      </div>
    </div>
  );
};

export default MyItems;