import React from 'react';
import useProduct from '../../CustonHooks/useProduct';
import ManageDetails from '../Home/ManageDetails/ManageDetails';

const ManageInventory = () => {
    const [products, setProducts]= useProduct()
    
    return (
        <div>
            <h1>Thi is manage inventory</h1>
          <div className='product-container'>
          {
                products.map(product=> <ManageDetails
                key={product.id}
                product={product}></ManageDetails>)
                }
          </div>


            
        </div>
    );
};

export default ManageInventory;