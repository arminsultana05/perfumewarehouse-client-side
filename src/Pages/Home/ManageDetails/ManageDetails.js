import React from 'react';
import { useNavigate } from 'react-router-dom';


const ManageDetails = ({ product }) => {
  const {id, img, name,supplier,price,qty } = product;
  const navigate = useNavigate();
  const handleManageDetail=id=>{
    navigate(`/inventory/${id}`)

  }

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 w-50 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-left text-left">
          <p className=" ml-3">Name: {name}</p>
          <p className=" ml-3">Supplier: {supplier}</p>
          <p className=" ml-3">Price: ${price}</p>
          <p className=" ml-3">Qty: {qty}</p>
          <p className=" ml-3">If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions ">
            <button onClick={()=>handleManageDetail(id)} className="btn btn-secondary bg-pink-500 ">SHOP NOW</button>
            <button className="btn btn-secondary bg-pink-500 ">DELETE</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ManageDetails;