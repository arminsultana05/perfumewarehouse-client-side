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
        <div className='w-full sm:w-3/5 mx-auto  mt-10 mb-10'>

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
