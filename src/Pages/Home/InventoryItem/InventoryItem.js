import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../../CustonHooks/useProduct';
import Product from '../Product/Product';
import './InventoryItem.css'

const InventoryItem = () => {
    const [products, setProducts] = useProduct([])
    const navigate = useNavigate()

    return (
        <div>
            <h1 className='text-4xl text-center mt-10 mb-5 text-orange-600 font-bold'>INVENTORY ITEMS !!!</h1>
            <div className="product-container">
                {
                    products.slice(0, 6).map(product => <Product key={product._id}
                        product={product}>

                    </Product>)

                }
            </div>
            <div className='text-center'>
                <button onClick={() => navigate("/manage")} className="btn btn-secondary bg-pink-500 px-20 mt-10 mb-5  mb-5 ">EXPLORE MORE</button>
            </div>

        </div>
    );
};

export default InventoryItem;