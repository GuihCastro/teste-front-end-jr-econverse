import styles from './Button.module.scss';

interface buttonProps {
    label: string;
}

const Button: React.FC<buttonProps> = ({ label }) => {
    return (
        <button className={styles.container}>{label}</button>
    );
}

export default Button;