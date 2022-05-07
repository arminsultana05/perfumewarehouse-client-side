import React from 'react';
import './Deleteitem.css'

const DeleteItems = ({product,handleDelete}) => {
    return (
        <div className=''>
            <div class="table_responsive">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{product._id}</td>
                            <td><img src={product.img} alt="" /></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.qty}</td>
                            <td>
                                <span class="action_btn">
                                    
                                    <button onClick={()=>handleDelete(product._id)} className="btn btn-secondary bg-pink-500  ">Remove</button>
                                  
                                </span>
                            </td>
                        </tr>

                       

                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default DeleteItems;