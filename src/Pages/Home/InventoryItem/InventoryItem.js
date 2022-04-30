import React, { useEffect, useState } from 'react';
import useProduct from '../../../CustonHooks/useProduct';
import Product from '../Product/Product';
import './InventoryItem.css'

const InventoryItem = () => {
    const[ products, setProducts] = useProduct()
    
    return (
        <div>
            <h1>This is inventory items{products.length}</h1>
          <div className="product-container">
          {
                  products.slice(0,6).map(product=> <Product key={product.id}
                    product={product}>
    
                    </Product>)         
                     }
          </div>
          <button class="btn btn-secondary bg-pink-500 px-20 mt-5 ml-2">EXPLORE MORE</button>
        </div>
    );
};

export default InventoryItem;