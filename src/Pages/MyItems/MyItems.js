import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Orders from '../Order/Orders/Orders'



const MyItems = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getOrder = async () => {
            const email = user.email
            const url = `https://fierce-fortress-12613.herokuapp.com/order?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setOrder(data)
        }
        getOrder();
    },[user])
    if(!user){
        navigate('/')
    }
   
    const handleRemove = id => {
        const procce = window.confirm("Are You Sure?");
        if (procce) {
            const url = `https://fierce-fortress-12613.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = order.filter(orde => orde._id !== id);
                    setOrder(remaining)
                })
        }
    }
    return (
        <div >
           
            <div >
            <h1 className='text-3xl text-center font-bold mt-10 mb-10 text-red-500'>MY TOTAL PRODUCTS : {order.length}</h1>
                {
                    order.map(orde => <Orders key={orde._id}
                        orde={orde}
                        handleRemove={handleRemove}></Orders>)
                }
            </div>
        </div>
    );
};

export default MyItems;