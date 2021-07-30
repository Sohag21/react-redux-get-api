import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './style.css'

export const ProductComponent = (props) => {
    const products = useSelector((state) => state.allProducts.products);
    
    const renderList = products.map((product) => {
        const { id, title, price, image} = product;
        return(
            <div className="productCard" key={id}>
                <Link to={`/product/${id}`}>
                <img src={image} alt={title} />
                <p>{title}</p>
                <p>${price}</p>
                </Link>
            </div>
        );
    });
    return(
        <>
            {renderList}
        </>
    )
    
}


export default ProductComponent;
