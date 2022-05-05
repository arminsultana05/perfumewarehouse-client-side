import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Orders from '../Order/Orders/Orders';

const MyItems = () => {
    const [user]=useAuthState(auth)
    const [order, setOrder]= useState([])
    useEffect(()=>{
        const getOrder = async()=>{
            const email=user.email
            const url =`http://localhost:5000/order?email=${email}` ;
           const {data} = await axios.get(url)
           setOrder(data)
        }
        getOrder();
      
    },[user])

    return (
        <div>
            <h1>My items:{order.length}</h1>
            {/* {
                Orders.map(order=> <Orders key={order._id}
                order={order}></Orders>)
            } */}
            
        </div>
    );
};

export default MyItems;