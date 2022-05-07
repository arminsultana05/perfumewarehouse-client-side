import React from 'react';
import useProduct from '../../CustonHooks/useProduct';
import DeleteItems from './DeleteItems/DeleteItems';
import './DeleteProduct.css'

const DeletwProduct = () => {
    const [products, setProducts] = useProduct()
    const handleDelete = id => {
        const procced = window.confirm("Are You Sure?");
        if (procced) {
            const url = `https://fierce-fortress-12613.herokuapp.com/product/${id}`;
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
        <div className="table_responsive">
            <div className='m-5 mt-10 mb-10 '>

                {
                    products.map(product => <DeleteItems key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                    >

                    </DeleteItems>)


                }

            </div>
        </div>
    );
};

export default DeletwProduct;
