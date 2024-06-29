import styles from './BannerOfertas.module.scss';

import Button from '../Button/Button';

const BannerOfertas: React.FC = () => {
    return (
        <div 
            className={styles.container} 
            
        >
            <div className={styles.bannerInfo}>
                <h2>Venha conhecer nossas promoções</h2>
                <p>50% Off nos produtos</p>
                <Button label='Ver produto' />
            </div>
        </div>
    );
}

export default BannerOfertas;