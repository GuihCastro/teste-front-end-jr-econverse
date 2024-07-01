import styles from './Banner.module.scss';

import Button from '../Button/Button';

interface bannerProps {
    title: string,
    description: string,
    btnLabel: string
}

const Banner: React.FC<bannerProps> = ({ title, description, btnLabel }) => {
    return (
        <div className={styles.container}>
            <div className={styles.bannerInfo}>
                <h2>{title}</h2>
                <p>{description}</p>
                <Button label={btnLabel} />
            </div>
        </div>
    );
}

export default Banner;