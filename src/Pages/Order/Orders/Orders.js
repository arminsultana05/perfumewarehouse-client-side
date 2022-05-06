import React from 'react';
import useProduct from '../../../CustonHooks/useProduct';

const Orders = ({orde,handleRemove}) => {
   
   
    return (
        <div className='w-4/6 mx-auto mt-5 mb-5'>
           
            <div class="table_responsive">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{orde._id}</td>
                            <td>{orde.product}</td>
                            <td>{orde.email}</td>
                            <td>{orde.address}</td>
                            <td>{orde.phone}</td>
                            <td>
                                <span class="action_btn">
                                    
                                    <button onClick={()=>handleRemove(orde._id)} className="btn btn-secondary bg-pink-500  ">Remove</button>
                                  
                                </span>
                            </td>
                        </tr>

                       

                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Orders;