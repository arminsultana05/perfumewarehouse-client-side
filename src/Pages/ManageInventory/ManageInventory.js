import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../CustonHooks/useProduct';
import ManageDetails from '../Home/ManageDetails/ManageDetails';

const ManageInventory = () => {
  const [products, setProducts] = useProduct()
  const navigate = useNavigate()
  return (
    <div>
      <div className="">
        <h1 className='text-3xl text-center font-bold mt-10 mb-10 text-red-500'>ALL MANAGE INVENTORY ITEMS !!!</h1>
        <div className='product-container'>
          {
            products.map(product => <ManageDetails
              key={product._id}
              product={product}></ManageDetails>)
          }
        </div>
      </div>
      <div className="flex-wrap md:flex  md:space-x-4 w-full sm:w-2/5 mx-auto mb-5 ">
        <button onClick={() => navigate("/additem")} className="btn btn-success px-20 mt-5 mb-5 ">ADD NEW ITEM</button>
        <button onClick={() => navigate("/deleteitem")} className=" btn btn-warning     px-20 mt-5  mb-5">DELETE ITEM</button>
      </div>
    </div>
  );
};

export default ManageInventory;