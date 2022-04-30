import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const InventoryItem = () => {
    const[ products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
            <h1>This is inventory items{products.length}</h1>
            {
                products.map(product=> <Product key={product.id}
                product={product}>

                </Product>)            }
            
        </div>
    );
};

export default InventoryItem;