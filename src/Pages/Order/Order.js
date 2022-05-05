// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import MyItems from '../MyItems/MyItems';



// const Order = () => {
//     const [user]=useAuthState(auth)
//     const [orders, setOrders]= useState([])
//     useEffect(()=>{
//         const getOrder = async()=>{
//             const email=user.email
//             const url =`http://localhost:5000/order?email=${email}` ;
//            const {data} = await axios.get(url)
//            setOrders(data)
//         }
//         getOrder();
      
//     },[user])

//     return (
       
     
//             <div>
//                 <h1>My items:{orders.length}</h1>
//                 {
//                     orders.map(order=> <MyItems key={order._id}
//                     orders={order}></MyItems>)
//                 }
                
//             </div>
//     );
// };

// export default Order;