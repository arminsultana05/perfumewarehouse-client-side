import { useEffect, useState } from "react"
import Loading from "../Pages/Shared/Loading/Loading"

const useProduct =()=>{
    const [products, setProducts]= useState([])
   
    useEffect(()=>{
        fetch('https://fierce-fortress-12613.herokuapp.com/product')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    
    return[products, setProducts];
}
export default useProduct;