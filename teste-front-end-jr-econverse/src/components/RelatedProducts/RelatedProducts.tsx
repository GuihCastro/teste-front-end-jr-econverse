import { useState } from 'react';

import styles from './RelatedProducts.module.scss';

const RelatedProducts: React.FC = () => {
    const [activeProductCategory, setActiveProductCategory] = useState<number>(0);

    const handleCategoryClick = (index: number) => {
        setActiveProductCategory(index);
    };

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <hr />
                <h2>Produtos relacionados</h2>
            </div>

            <ul className={styles.nav}>
                {['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'].map((item, index) => (
                    <li key={index}>
                        <button
                            className={`${index === activeProductCategory ? styles.isActive : ''} ${item === 'Assinatura' ? styles.signatureBtn : ''}`}
                            onClick={() => handleCategoryClick(index)}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default RelatedProducts;