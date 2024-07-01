import styles from './ProductCardSecondary.module.scss';

import Button from '../Button/Button';

const ProductCardSecondary: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2>Produtos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <Button label='Confira' />
            </div>
        </div>
    );
}

export default ProductCardSecondary;