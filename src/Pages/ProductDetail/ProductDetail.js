import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { inventoryId } = useParams()
    const [product, setProduct]= useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/product/${inventoryId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data =>setProduct(data))
    },[])
    const navigate = useNavigate()
    return (
        <div>
            <h2>Wlcome Product Details: {product.name}</h2>
            <div className="">
                <button onClick={() => navigate("/manage")} class="btn btn-secondary bg-pink-500 px-20 mt-5 ml-2">EXPLORE MORE</button>
            </div>
        </div>
    );
};

export default ProductDetail;