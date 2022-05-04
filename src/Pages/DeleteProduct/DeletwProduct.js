import React from 'react';
import useProduct from '../../CustonHooks/useProduct';
import DeleteItems from './DeleteItems/DeleteItems';
import './DeleteProduct.css'

const DeletwProduct = () => {
    const [products, setProducts] = useProduct()
    const handleDelete = id => {
        const procced = window.confirm("Are You Sure?");
        if (procced) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                })

        }
    }
    return (
        <div className='  mt-10 mb-10'>

            {
               

               products.map(product=> <DeleteItems key={product._id}
               product={product}
               handleDelete={handleDelete}
               >

               </DeleteItems>)
                    
             
                }

        </div>
    );
};

export default DeletwProduct;
// {/* <div className="card  bg-base-100 shadow-xl mb-5">
                    //     <figure className="px-10 w-50 pt-10">
                    //         <img src={product.img} alt="Shoes" className="rounded-xl" />
                    //     </figure>
                    //     <div className="card-body items-left text-left">
                    //         <p className=" ml-3">Name: {product.name}</p>
                    //          <p className=" ml-3">Price: ${product.price}</p>
                    //         <p className=" ml-3">Qty: {product.qty}</p>
                          
                    //         <div className="card-actions  ">
                    //             <button onClick={()=>handleDelete(product._id)} className="btn btn-secondary bg-pink-500 ml-20 px-10 ">DELETE ITEM</button>

                    //         </div>
                    //     </div>

                    // </div> */}
                    
