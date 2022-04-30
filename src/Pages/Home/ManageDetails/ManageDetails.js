import React from 'react';

const ManageDetails = ({product}) => {
    const {img}=product;
  
    return (
        <div>
            <div class="card  bg-base-100 shadow-xl">
  <figure class="px-10 w-50 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
    <button class="btn btn-secondary bg-pink-500 ">SHOPE NOW</button>
    </div>
  </div>
</div>
           
            
        </div>
    );
};

export default ManageDetails;