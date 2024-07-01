import styles from './Home.module.scss';

import { useState } from "react";
import Header from "../../components/Header/Header";
import BannerList from "../../components/BannerList/BannerList";
import CategoriesNav from "../../components/CategoriesNav/CategoriesNav";
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';
import PartnerCard from '../../components/PartnerCard/PartnerCard';
import ProductCardSecondary from '../../components/ProductCardSecondary/ProductCardSecondary';
import BrandsNav from '../../components/BrandsNav/BrandsNav';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(5);

    return (
        <div className={styles.container}>
            <Header activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

            <BannerList activeIndex={activeIndex} />

            <CategoriesNav />

            <RelatedProducts />

            <div className={styles.partners}>
                <PartnerCard />
                <PartnerCard />
            </div>

            <div className={styles.divider}>
                <div className={styles.content}>
                    <hr />
                    <div className={styles.title}>
                        <h2>Produtos relacionados</h2>
                        <a href="/">Ver todos</a>
                    </div>
                </div>
            </div>

            <div className={styles.productsSecondary}>
                <ProductCardSecondary />
                <ProductCardSecondary />
            </div>

            <div className={styles.divider}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h2>Navegue por marcas</h2>
                    </div>
                </div>
            </div>

            <BrandsNav />

            <Footer />
        </div>
    );
};

export default Home;