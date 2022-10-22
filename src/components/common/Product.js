import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContextProvider";

const Product = (props) => {
    const productId = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[productId - 1];
    const { image, title, description, price, category } = product;

    return (
        <div>
            <img style={{ width: "300px", height: "300px", objectFit: "cover" }} src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{category}</p>
                <div>
                    <span>{price}</span>
                    <Link to="/products">Back To Products</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
