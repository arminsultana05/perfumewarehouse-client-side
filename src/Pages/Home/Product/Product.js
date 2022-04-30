import React from 'react';

const Product = ({ product }) => {
    const { name, img, price, qty, description } = product;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                    <button class="btn btn-secondary bg-pink-500 ">SHOPE NOW</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Product;