import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeSelectedProducts } from '../redux/actions/ProductActions';
import './style.css'

export const ProductDetail = (props) => {
    const product = useSelector((state) => state.product);
    const {image, title, category, price, description} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product)

    const fetchProductDetails = async () => {
        const response = await axios 
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((error) =>{
            console.log("error", error);
        });

        dispatch(selectedProducts(response.data));
    };
    useEffect(() => {
        if(productId && productId !== "") fetchProductDetails();
        return () =>{
            dispatch(removeSelectedProducts());
        }
    }, [productId]);
    return (
        <div className="ProductDetail">
            {
                Object.keys(product).length === 0 ? (
                    <div>...loading</div>
                ) : (
                    <div className="alldetailsInfo">
                        <div className="img">
                            <img src={image} alt={title} />
                        </div>
                        <div className="info">
                            <p>{category}</p>
                            <h3>{title}</h3>
                            <h4>{price}</h4>
                            <p>{description}</p>
                        </div>
                        
                    </div>
                )
            }

        </div>
    )
}

export default ProductDetail;
