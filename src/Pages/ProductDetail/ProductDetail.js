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
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={products.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-left text-left">
                    <p className=" ml-3">Name: {products.name}</p>
                    <p className=" ml-3">Supplier: {products.supplier}</p>
                    <p className=" ml-3">Price: ${products.price}</p>
                    <p className=" ml-3">Qty: {products.qty}</p>
                    <p className=" ml-3">{products.description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Delete Qty</button>
                        <button className="btn btn-primary">Update Qty</button>
                    </div>
                </div>
            </div>
            <div classNameName="">
                <button onClick={() => navigate("/manage")} className="btn btn-secondary bg-pink-500 px-20 mt-5 ml-2">EXPLORE MORE</button>
            </div>
        </div>
    );
};

export default ProductDetail;