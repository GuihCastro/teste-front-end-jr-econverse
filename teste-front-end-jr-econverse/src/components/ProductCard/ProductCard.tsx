import React from 'react';
import './ProductCard.module.scss';

interface ProductCardProps {
    product: any;
    onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    return (
        <div className="product-card" onClick={onClick}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    );
};

export default ProductCard;
