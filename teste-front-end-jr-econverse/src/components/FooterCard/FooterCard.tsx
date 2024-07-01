import styles from './FooterCard.module.scss';

import Button from '../Button/Button';

const FooterCard: React.FC = () => {
    return (
        <div className={styles.container}>
            <h2>Cadastre-se e receba nossas <span>novidades e promoções</span></h2>

            <p>
                Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum
            </p>

            <div className={styles.form}>
                <input type="email" name="email" id="email" placeholder='Seu e-mail' />
                <Button label='Ok' />
            </div>
        </div>
    );
}

export default FooterCard;