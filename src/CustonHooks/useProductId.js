import { useEffect, useState } from "react";

const useProductIdDetail = productId =>{
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `https://fierce-fortress-12613.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [ productId])
    return [products, setProducts]
}
export default useProductIdDetail;