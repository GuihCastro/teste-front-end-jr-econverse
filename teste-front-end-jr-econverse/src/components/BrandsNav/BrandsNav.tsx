import styles from './BrandsNav.module.scss';
import arrow from '../../../assets/img/right-arrow-2.png';

import BrandBadge from '../BrandBadge/BrandBadge';

const BrandsNav: React.FC = () => {
    return (
        <ul className={styles.container}>
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map((index) => (
                <li key={index}>
                    <BrandBadge />
                </li>
            ))}
            <button className={styles.next}>
                <img src={arrow} alt="Ícone do botão para carregar mais marcas." />
            </button>
        </ul>

        // <section className={styles.container}>
        //     <BrandBadge />
        // </section>
    );
}

export default BrandsNav;