import styles from './BannerList.module.scss';

import BannerOfertas from '../BannerOfertas/BannerOfertas';

interface BannerProps {
    activeIndex: number;
}

const BannerList: React.FC<BannerProps> = ({ activeIndex }) => {
    const banners = [
        "Banner para Todas categorias",
        "Banner para Supermercado",
        "Banner para Livros",
        "Banner para Moda",
        "Banner para Lançamentos",
        <BannerOfertas />,
        "Banner para Assinatura"
    ];

    return (
        <div className={styles.container}>
            {activeIndex === -1 ? <p>Banner default</p> : <div>{banners[activeIndex]}</div>}
        </div>
    );
}

export default BannerList;