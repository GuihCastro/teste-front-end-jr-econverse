import styles from './PartnerCard.module.scss';

import Button from '../Button/Button';

const PartnerCard: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2>Parceiros</h2>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <Button label='Confira' />
            </div>
        </div>
    );
}

export default PartnerCard;