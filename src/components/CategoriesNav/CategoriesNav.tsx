import { useState } from 'react';

import styles from './CategoriesNav.module.scss';

import CategoryTab from '../CategoryTab/CategoryTab';

const CategoriesNav: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    }

    return (
        <ul className={styles.container}>
            {['Tecnologia', 'Supermercado', 'Bebidas', 'Ferramentas', 'Saúde', 'Esportes e Fitness', 'Moda'].map((item, index) => (
                <li key={index}>
                    <CategoryTab label={item} iconIndex={index} isActive={activeTab === index} onClick={() => handleTabClick(index)} />
                </li>
            ))}
        </ul>
    );
}

export default CategoriesNav;