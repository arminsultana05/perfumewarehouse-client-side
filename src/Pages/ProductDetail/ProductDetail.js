import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const { inventoryId } = useParams()
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const navigate = useNavigate()
    return (
        <div className='inventory-items'>

            <div class="table_responsive">
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
            <div className=" mx-auto w-1/3">
                <h1 className='mt-5 ml-4 font-semibold'>RESTOCK THE ITEM</h1>
                <form >
                    <input className='border border-pink-600 mt-5 '  placeholder='Update 
                    Quantity' type="number" name="" id="" />
                    <br />
                   <button className='btn btn-sm bg-pink-400 mt-2'>Increase qty</button>
                </form>
            </div>

            <div>
                <button onClick={() => navigate("/manage")} className="btn btn-secondary bg-pink-500 px-20 mt-5 ml-60 mb-5  mb-5 ">EXPLORE MORE</button>
            </div>
        </div>
    );
};

export default ProductDetail;