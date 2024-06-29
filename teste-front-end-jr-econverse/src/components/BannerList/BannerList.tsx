import styles from './BannerList.module.scss';

import Banner from '../Banner/Banner';

interface BannerProps {
    activeIndex: number;
}

const BannerList: React.FC<BannerProps> = ({ activeIndex }) => {
    const banners = [
        <Banner
            title='Confira nossos produtos'
            description=''
            btnLabel='Ver produtos'
        />,
        <Banner
            title='Confira nossos itens de Supermercado'
            description='E compre sem sair de casa'
            btnLabel='Ver supermercado'
        />,
        <Banner
            title='Conheça nossa livraria'
            description='Catálogo completo e variado'
            btnLabel='Ver livros'
        />,
        <Banner
            title=''
            description='Catálogo completo e variado'
            btnLabel='Ver livros'
        />,
        "Banner para Lançamentos",
        <Banner
            title='Venha conhecer nossas promoções'
            description='50% Off nos produtos'
            btnLabel='Ver produto'
        />,
        "Banner para Assinatura"
    ];

    return (
        <div className={styles.container}>
            {activeIndex === -1 ? <p>Banner default</p> : <div>{banners[activeIndex]}</div>}
        </div>
    );
}

export default BannerList;