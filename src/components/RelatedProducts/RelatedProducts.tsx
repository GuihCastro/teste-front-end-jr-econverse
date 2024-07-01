import { useState } from 'react';

import styles from './RelatedProducts.module.scss';

import CardList from '../CardList/CardList';

const RelatedProducts: React.FC = () => {
    const [activeProductCategory, setActiveProductCategory] = useState<number>(0);

    const handleCategoryClick = (index: number) => {
        setActiveProductCategory(index);
    };

    return (
        <main className={styles.container}>
            <div className={styles.title}>
                <hr />
                <h2>Produtos relacionados</h2>
            </div>

            <ul className={styles.nav}>
                {['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'].map((item, index) => (
                    <li key={index}>
                        <button
                            className={`${index === activeProductCategory ? styles.isActive : ''}`}
                            onClick={() => handleCategoryClick(index)}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>

            <CardList />
        </main>
    );
}

export default RelatedProducts;