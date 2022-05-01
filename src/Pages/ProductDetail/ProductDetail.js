import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {inventoryId} = useParams()
    return (
        <div>
            <h2>Wlcome Product Details: {inventoryId}</h2>
            
        </div>
    );
};

export default ProductDetail;