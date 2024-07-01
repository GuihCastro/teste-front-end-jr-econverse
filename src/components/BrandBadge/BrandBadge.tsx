import styles from './BrandBadge.module.scss';

import logo from '../../../public/assets/img/vtex-logo.png';

const BrandBadge: React.FC = () => {
    return (
        <button className={styles.container}>
            <img src={logo} alt="Logotipo da marca." />
        </button>
    );
}

export default BrandBadge;