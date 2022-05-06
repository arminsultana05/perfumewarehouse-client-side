import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useProduct from '../../CustonHooks/useProduct';
import useProductIdDetail from '../../CustonHooks/useProductId';
import auth from '../../firebase.init';
import Orders from '../Order/Orders/Orders'


const MyItems = () => {
    const [user]=useAuthState(auth)
    const [order, setOrder]= useState([])
    useEffect(()=>{
        const getOrder = async()=>{
            const email=user.email
            const url =`http://localhost:5000/order?email=${email}` ;
           const {data} = await axios.get(url ,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
    
        })
           setOrder(data)
        }
        getOrder();
      
    },[user])
   
    const handleRemove = id => {
        const procce = window.confirm("Are You Sure?");
        if (procce) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = order.filter(orde =>orde._id !== id);
                    setOrder(remaining)
                })

        }
    }
   

    return (
        <div>
            <h1>My items:{order.length}</h1>
           {
               order.map(orde=> <Orders key={orde._id}
               orde={orde}
               handleRemove={handleRemove}></Orders>)
           }
        </div>
    );
};

export default MyItems;