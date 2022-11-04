import React from "react";
import { ProductsContext } from "../../context/products/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.style.scss'

const Shop = () => {
    const {products} = React.useContext(ProductsContext);
    
    return(
        <div className="products-container">
            {products.map((product) => ( 
                <ProductCard product={product} key={product.id} /> 
            ))}
        </div>
    );
};

export default Shop;