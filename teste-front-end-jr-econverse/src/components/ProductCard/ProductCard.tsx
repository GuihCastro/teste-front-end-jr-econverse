import styles from './ProductCard.module.scss';

import Button from '../Button/Button';
interface ProductCardProps {
    name: string,
    short: string,
    photo: string,
    price: number
}

const ProductCard: React.FC<ProductCardProps> = ({ name, short, photo, price }) => {
    return (
        <li className={styles.container}>
            <img src={photo} alt="Imagem do produto." />
            <div className={styles.info}>
                <p>{short}</p>
                <div className={styles.price}>
                    <h3>R${price}</h3>
                    <h2>Ou 2x de R${price / 2} sem juros</h2>
                </div>
                <span>Frete grátis</span>
            </div>
            <Button label='Comprar' />
            {/* <h3>{name}</h3> */}
        </li>
    );
}

export default ProductCard;



// import React from 'react';
// import './ProductCard.module.scss';

// interface ProductCardProps {
//     product: any;
//     onClick: () => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
//     return (
//         <div className="product-card" onClick={onClick}>
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
//         </div>
//     );
// };

// export default ProductCard;
