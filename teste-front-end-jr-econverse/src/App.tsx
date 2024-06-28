import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api/products';
import ProductCard from './components/ProductCard/ProductCard';
import ProductModal from './components/ProductModal/ProductModal';
import './styles/global.scss';

const App: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts();
            setProducts(products);
        };

        getProducts();
    }, []);

    return (
        <div className="product-gallery">
            {products.map(product => (
                <ProductCard product={product} onClick={() => setSelectedProduct(product)} />
            ))}
            {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
        </div>
    );
};

export default App;
