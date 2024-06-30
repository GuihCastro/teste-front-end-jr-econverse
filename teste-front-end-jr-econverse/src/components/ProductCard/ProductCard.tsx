import styles from './ProductCard.module.scss';

import { useState } from 'react';
import Button from '../Button/Button';
import ProductModal from '../ProductModal/ProductModal';
interface ProductCardProps {
    name: string,
    short: string,
    photo: string,
    price: number
}

const ProductCard: React.FC<ProductCardProps> = ({ name, short, photo, price }) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <li className={styles.container}>
                <div className={styles.content} onClick={handleOpenModal}>
                    <div className={styles.productMain}>
                        <img src={photo} alt="Imagem do produto." />
                        <p>{short}</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.price}>
                            <h3>R$ {price}</h3>
                            <h2>Ou 2x de R$ {(price / 2).toFixed(2)} sem juros</h2>
                        </div>
                        <span>Frete grátis</span>
                    </div>
                </div>
                <Button label='Comprar' />
                {/* <h3>{name}</h3> */}
            </li>

            <ProductModal 
                open={openModal} 
                close={handleCloseModal} 
                name={name} 
                short={short}
                photo={photo}
                price={price}
            />
        </>
    );
}

export default ProductCard;
