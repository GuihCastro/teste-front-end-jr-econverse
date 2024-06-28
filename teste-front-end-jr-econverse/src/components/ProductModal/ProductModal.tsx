import React from 'react';
import './ProductModal.module.scss';

interface ProductModalProps {
    product: any;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                {/* Adicionar mais detalhes conforme necessário */}
            </div>
        </div>
    );
};

export default ProductModal;
