import { useState } from "react";
import Header from "../components/Header/Header";
import BannerList from "../components/BannerList/BannerList";

const Home: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    return (
        <div>
            <Header activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

            <BannerList activeIndex={activeIndex} />
        </div>
    );
};

export default Home;