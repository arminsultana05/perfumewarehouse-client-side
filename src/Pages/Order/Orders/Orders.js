import React from 'react';


const Orders = ({orde,handleRemove}) => {
   
   
    return (
        <div className='m-5'>
           
            <div class="table_responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Order Qty</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{orde.photo}</td>
                            <td>{orde.product}</td>
                            <td>$ {orde.price}</td>
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