import React from 'react';
import { useNavigate } from 'react-router-dom';

const
    Product = ({ product }) => {
        const { id, name, img, price, qty, description, supplier } = product;
        const navigate = useNavigate()
        const handleProductDetail = id => {
            navigate(`/inventory/${id}`)

        }
        return (
            <div>
                <div className="card flex flex-col justify-between bg-base-100 shadow-xl">
                    <figure className="px-10 w-50 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-left text-left">
                        <p className=" ml-3">Name: {name}</p>
                        <p className=" ml-3">Supplier: {supplier}</p>
                        <p className=" ml-3">Price: ${price}</p>
                        <p className=" ml-3">Qty: {qty}</p>
                        <p className=" ml-3">{description}</p>
                        <div className="card-actions ">
                            <button onClick={() => handleProductDetail(id)} class="btn btn-secondary bg-pink-500 ml-20 px-10">SHOP NOW</button>
                        </div>
                    </div>
                </div>


            </div>
        );
    };

export default Product;