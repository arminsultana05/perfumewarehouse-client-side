import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url =`http://localhost:5000/product`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)

        })
        .then(res => res.json())
        .then(result=>{
            console.log(result);
        })
    }
    return (
        <div className=''>
           
            <form className='flex flex-col items-center  ' onSubmit={handleSubmit(onSubmit)}>
                <input className=' mt-5 border border-gray-600 w-96 ' placeholder='name' {...register("name")} />
                <input  className=' mt-5 border border-gray-600 w-96'  placeholder='Supplier' {...register("supplier")} />
                <input  className=' mt-5 border border-gray-600 w-96'  placeholder='Photo URL' type="text" {...register("img")} />
           
                <input  className=' mt-5 border border-gray-600 w-96'  placeholder='Quantity' type="number" {...register("qty")} />
                <input  className=' mt-5 border border-gray-600 w-96'  placeholder='Price' type="number" {...register("price")} />
           
              <textarea className=' mt-5 border border-gray-600 w-96'  placeholder='description' {...register("description")} />
            
             <input className='py-2 mt-5 mb-5 border border-gray-300 bg-pink-200 w-96'   type="submit" value="Add Item" />
            </form>

        </div>
    );
};

export default AddProduct;