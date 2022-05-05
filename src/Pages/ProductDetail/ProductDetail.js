
import { Link, useNavigate, useParams } from 'react-router-dom';
import useProductIdDetail from '../../CustonHooks/useProductId';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import axios from 'axios';
import './ProductDetail.css'
import { useState } from 'react';

const ProductDetail = () => {
    const [user] = useAuthState(auth);
    const { inventoryId } = useParams()
    const [products]= useProductIdDetail(inventoryId)
// <.....Plac Order section.....>
    const handlePlaceOrder = event =>{
        event.preventDefault()
        const order ={
            product:products.name,
            inventory:inventoryId,
            email:user.email,
            address:event.target.address.value,
            phone:event.target.phone.value
            
           
        }
        console.log(order);
        
        axios.post('http://localhost:5000/order', order)
        .then(response=>{
            console.log(response);
        })

    }
 
    
    const navigate = useNavigate()
    return (
        <div className=''>

            <div className="table_responsive">
                <table>
                    <thead>
                        <tr>
                            <th>lD</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{products._id}</td>
                            <td><img src={products.img} alt="" /></td>
                            <td>{products.name}</td>
                            <td>{products.price}</td>
                            <td>{products.qty}</td>
                            <td>{products.supplier}</td>
                            <td>
                                <span class="action_btn">
                              <button className="btn btn-secondary bg-pink-500  ">Delivered</button>
                               </span>
                            </td>
                        </tr>
                     </tbody>
                </table>
              
            </div>
           
            <div className=" text-center ">
                <h1 className='mt-5 ml-4 font-semibold'>RESTOCK THE ITEM</h1>
                <form  >
                    <input className='border border-pink-600 mt-5 '  placeholder='Update 
                    Quantity' type="number" name="name" id="" />
                    <br />
                    <input className='btn btn-sm bg-pink-400 mt-5' type="submit" value="Update User" />
                    </form>

            </div>
            <div className="text-center mt-5">
                    <h1 className='mb-2 text-2xl font-semibold'>Order Your Product</h1>
                    <form onSubmit={handlePlaceOrder} >
                        <input className=' w-1/3 border  border-pink-600 mt-3 p-1' type="text"  value={products.name}    name="name" placeholder='Product-Name' id="" readOnly />
                        <br />
                        <input className='w-1/3 border border-pink-600 p-1 mt-3' type="text" name="name" value={user.displayName} placeholder='name' id=""  readOnly/>
                        <br />
                        <input className='w-1/3 border border-pink-600 p-1 mt-3' type="email" name="email" value={user.email} placeholder='email' id="" readOnly disabled />
                        <br />
                        <input className='w-1/3 border border-pink-600 p-1 mt-3' type="text" name="address"  placeholder='address' id="" required />
                        <br />
                        <input className='w-1/3 border border-pink-600 p-1 mt-3' type="text" name="phone"  placeholder='phone' id=""  />
                        <br />
                      <input className='bg-pink-300 w-1/3 mt-2 p-2' type="submit" value="Place Order" />

                    </form>
                </div>
            <div className='text-center'>
                <button onClick={() => navigate("/manage")} className="btn btn-secondary bg-pink-500 px-20 mt-5 mb-5  mb-5 ">EXPLORE MORE</button>
            </div>
        </div>
    );
};

export default ProductDetail;