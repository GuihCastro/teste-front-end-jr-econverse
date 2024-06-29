import styles from './Home.module.scss';

import { useState } from "react";
import Header from "../../components/Header/Header";
import BannerList from "../../components/BannerList/BannerList";
import CategoriesNav from "../../components/CategoriesNav/CategoriesNav";

const Home: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(5);

    return (
        <div className={styles.container}>
            <Header activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

            <BannerList activeIndex={activeIndex} />

            <CategoriesNav />
        </div>
    );
};

export default Home;