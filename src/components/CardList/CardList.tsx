import { useState, useEffect } from 'react';

import styles from './CardList.module.scss';
import prev from '../../../public/assets/img/prev-icon.png';
import next from '../../../public/assets/img/next-icon.png';

import { fetchProducts } from '../../api/products';

import ProductCard from '../ProductCard/ProductCard';

interface Product {
    id: number,
    productName: string,
    descriptionShort: string,
    price: number,
    photo: string
}

const CardList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [startIndex, setStartIndex] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = await fetchProducts();
                setProducts(api.products);
            } catch (e) {
                console.error('Erro ao buscar os dados da API:', e);
            }
        };
        fetchData();
    }, [])

    const displayedProducts: Product[] = products.slice(startIndex, startIndex + 4);

    const handleNext = () => {
        if (startIndex + 4 < products.length) setStartIndex(startIndex + 4);
    }

    const handlePrev = () => {
        if (startIndex - 4 >= 0) setStartIndex(startIndex - 4);
    }

    console.log(products);
    console.log(displayedProducts);


    return (
        <ul className={styles.container}>
            {displayedProducts.map(product => (
                <ProductCard key={product.id} name={product.productName} short={product.descriptionShort} price={product.price} photo={product.photo} />
            ))}
        <button className={styles.prev} onClick={handlePrev}>
            <img src={prev} alt="Ícone de seta para carregar os próximos itens." />
        </button>
        <button className={styles.next} onClick={handleNext}>
            <img src={next} alt="Ícone de seta para carregar os itens anteriores." />
        </button>
        </ul>
    );
}

export default CardList;