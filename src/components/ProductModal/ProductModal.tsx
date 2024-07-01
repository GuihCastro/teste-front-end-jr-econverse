import styles from './ProductModal.module.scss';

import { useState, useEffect } from 'react';
import Button from '../Button/Button';

import plus from '../../../public/assets/img/plus-icon.png';
import minus from '../../../public/assets/img/minus-icon.png';

interface ProductModalProps {
    open: boolean,
    close: () => void,
    name: string,
    short: string,
    photo: string,
    price: number
}

const ProductModal: React.FC<ProductModalProps> = ({ open, close, name, short, photo, price }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity => quantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(quantity => Math.max(1, quantity - 1));
    };

    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [open]);

    if (!open) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            close();
        }
    };

    return (
        <div className={styles.container} onClick={handleBackdropClick}>
            <div className={styles.modalCard}>
                <button className={styles.closeBtn} onClick={close}></button>
                <div className={styles.photo}>
                    <img src={photo} alt="Imagem do produto." />
                </div>
                <div className={styles.info}>
                    <h1>{name}</h1>
                    <h2>R$ {price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</h2>
                    <p>{short}</p>
                    <a href="/">Veja mais detalhes do produto</a>
                    <div className={styles.counter}>
                        <button onClick={handleDecrement}>
                            <img src={minus} alt="Ícone de decremento para diminuir a quantidade do produto." />
                        </button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrement}>
                            <img src={plus} alt="Ícone de incremento para aumentar a quantidade do produto." />

                        </button>
                    </div>
                    <Button label='Comprar' />
                </div>
            </div>
        </div>
    );
}

export default ProductModal;



// import React from 'react';
// import './ProductModal.module.scss';

// interface ProductModalProps {
//     product: any;
//     onClose: () => void;
// }

// const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
//     return (
//         <div className="modal-overlay" onClick={onClose}>
//             <div className="modal-content" onClick={e => e.stopPropagation()}>
//                 <button className="close-button" onClick={onClose}>X</button>
//                 <h2>{product.name}</h2>
//                 <p>{product.description}</p>
//                 {/* Adicionar mais detalhes conforme necessário */}
//             </div>
//         </div>
//     );
// };

// export default ProductModal;
