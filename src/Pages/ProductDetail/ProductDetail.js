import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { inventoryId } = useParams()
    const navigate = useNavigate()
    return (
        <div>
            <h2>Wlcome Product Details: {inventoryId}</h2>
            <div className="">
                <button onClick={() => navigate("/manage")} class="btn btn-secondary bg-pink-500 px-20 mt-5 ml-2">EXPLORE MORE</button>
            </div>
        </div>
    );
};

export default ProductDetail;