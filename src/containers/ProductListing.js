import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { ProductComponent } from './ProductComponent';
import { setProducts } from '../redux/actions/ProductActions';

export const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async() => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((error) => {
            console.log("error", error)
        });
        dispatch(setProducts(response.data));
    };

    useEffect(()=>{
        fetchProducts();
    }, []);
    console.log("Products: ", products)
    return (
        <div>
            <ProductComponent />
        </div>
    )
}


export default ProductListing;
