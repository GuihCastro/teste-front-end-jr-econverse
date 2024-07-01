import styles from './Footer.module.scss';

import facebook from '../../../public/assets/img/facebook-icon.png';
import instagram from '../../../public/assets/img/instagram-icon.png';
import youtube from '../../../public/assets/img/youtube-icon.png';
import visa from '../../../public/assets/img/visa.png';
import elo from '../../../public/assets/img/elo.png';
import alelo from '../../../public/assets/img/alelo.png';
import dinners from '../../../public/assets/img/dinners.png';
import ifood from '../../../public/assets/img/ifood.png';
import mastercard from '../../../public/assets/img/mastercard.png';
import pix from '../../../public/assets/img/pix.png';
import amex from '../../../public/assets/img/amex.png';
import ticket from '../../../public/assets/img/ticket.png';
import sodexo from '../../../public/assets/img/sodexo.png';
import econverse from '../../../public/assets/img/econverse-logo.png';
import vtexWhite from '../../../public/assets/img/vtex-logo-white.png';

import FooterCard from '../FooterCard/FooterCard';

const Footer: React.FC = () => {
    return (
        <footer className={styles.container}>
            <section className={styles.info}>
                <div className={styles.links}>
                    <div className={styles.about}>
                        <div className={styles.text}>
                            <h3>Sobre nós</h3>
                            <ul>
                                <li><a href="/">Conheça</a></li>
                                <li><a href="/">Como comprar</a></li>
                                <li><a href="/">Indicação e desconto</a></li>
                            </ul>
                        </div>
                        <div className={styles.social}>
                            <img src={facebook} alt="Logotipo do Facebook para acessar a rede social." />
                            <img src={instagram} alt="Logotipo do Instagram para acessar a rede social." />
                            <img src={youtube} alt="Logotipo do YouTube para acessar a rede social." />
                        </div>
                    </div>
                    <div className={styles.util}>
                        <h3>Informações úteis</h3>
                        <ul>
                            <li><a href="/">Fale conosco</a></li>
                            <li><a href="/">Dúvidas</a></li>
                            <li><a href="/">Prazos de entrega</a></li>
                            <li><a href="/">Formas de pagamento</a></li>
                            <li><a href="/">Política de privacidade</a></li>
                            <li><a href="/">Trocas e devoluções</a></li>
                        </ul>
                    </div>
                    <div className={styles.payment}>
                        <h3>Formas de pagamento</h3>
                        <ul>
                            <li><img src={visa} alt="Logotipo da forma de pagamento Visa." /></li>
                            <li><img src={elo} alt="Logotipo da forma de pagamento Elo." /></li>
                            <li><img src={alelo} alt="Logotipo da forma de pagamento Alelo." /></li>
                            <li><img src={dinners} alt="Logotipo da forma de pagamento Dinners." /></li>
                            <li><img src={ifood} alt="Logotipo da forma de pagamento iFood." /></li>
                            <li><img src={mastercard} alt="Logotipo da forma de pagamento MasterCard." /></li>
                            <li><img src={pix} alt="Logotipo da forma de pagamento Pix." /></li>
                            <li><img src={amex} alt="Logotipo da forma de pagamento American Express." /></li>
                            <li><img src={ticket} alt="Logotipo da forma de pagamento Ticket." /></li>
                            <li><img src={sodexo} alt="Logotipo da forma de pagamento Sodexo." /></li>
                        </ul>
                    </div>
                </div>

                <FooterCard />
            </section>

            <small>
                <p>
                    Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br />
                    É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                </p>
                <div>
                    <img src={econverse} alt="Logotipoe da agência Econverse." />
                    <img src={vtexWhite} alt="Logotipo da VTex." />
                </div>
            </small>
        </footer>
    );
}

export default Footer;