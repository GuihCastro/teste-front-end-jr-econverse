import styles from './CategoryTab.module.scss';

interface categoryTabProps {
    label: string,
    iconIndex: number
    isActive: boolean
    onClick: any
}

const CategoryTab: React.FC<categoryTabProps> = ({ label, iconIndex, isActive, onClick }) => {
    return (
        <div className={`${styles.container} ${isActive ? styles.isActive : ''}`}>
            <button onClick={onClick}>
                <img src={`../../../public/assets/img/tab-${iconIndex}.png`} alt="Ícone de categoria." />
            </button>
            <label>{label}</label>
        </div>
    );
}

export default CategoryTab;