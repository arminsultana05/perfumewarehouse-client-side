import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../CustonHooks/useProduct';
import ManageDetails from '../Home/ManageDetails/ManageDetails';

const ManageInventory = () => {
    const [products, setProducts]= useProduct()
    const navigate = useNavigate()
    
    return (
        <div>
          <div className="">
          <h1>Thi is manage inventory</h1>
          <div className='product-container'>
          {
                products.map(product=> <ManageDetails
                key={product._id}
                product={product}></ManageDetails>)
                }
          </div>
          </div>
          <div className="flex mb-5">
        <button onClick={() => navigate("/additem")}  className="btn btn-success  ml-20 px-10  ">ADD NEW ITEM</button>
         <button onClick={()=>navigate("/deleteitem")}  className=" btn btn-warning  ml-20 px-10 ">DELETE ITEM</button>
         </div>


            
        </div>
    );
};

export default ManageInventory;