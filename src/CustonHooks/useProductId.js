import { useEffect, useState } from "react";

const useProductIdDetail = productId =>{
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${ productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [ productId])
    return [products, setProducts]
}
export default useProductIdDetail;