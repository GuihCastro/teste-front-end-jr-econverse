import styles from './Header.module.scss';

import shield from '../../../public/assets/img/shield-icon.png';
import truck from '../../../public/assets/img/truck-icon.png';
import card from '../../../public/assets/img/card-icon.png';
import logo from '../../../public/assets/img/vtex-logo.png';
import magnifyingGlass from '../../../public/assets/img/magnifying-glass-icon.png';
import box from '../../../public/assets/img/box-icon.png';
import heart from '../../../public/assets/img/heart-icon.png';
import user from '../../../public/assets/img/user-icon.png';
import cart from '../../../public/assets/img/cart-icon.png';
import crown from '../../../public/assets/img/crown-icon.png';

interface HeaderProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ activeIndex, setActiveIndex }) => {

    const handleButtonClick = (index: number) => {
        setActiveIndex(index);
    }

    return (
        <header className={styles.container}>
            <div className={styles.badges}>
                <div className={styles.badge}>
                    <img src={shield} alt="Ícone de escudo indicando proteção." />
                    <p>Compra <span>100% segura</span></p>
                </div>
                <div className={styles.badge}>
                    <img src={truck} alt="Ícone de escudo indicando proteção." />
                    <p><span>Frete grátis</span> acima de R$200,00</p>
                </div>
                <div className={styles.badge}>
                    <img src={card} alt="Ícone de escudo indicando proteção." />
                    <p><span>Parecele</span> suas compras</p>
                </div>
            </div>

            <div className={styles.core}>
                <img src={logo} alt="Logotipo do ecommerce Vtex." />
                <div className={styles.coreOptions}>
                    <div className={styles.coreSearch}>
                        <input type="text" name="search" id="search" placeholder="O que você está buscando?" />
                        <button>
                            <img src={magnifyingGlass} alt="Ícone de lupa para o botão de busca." />
                        </button>
                    </div>

                    <div className={styles.coreIcons}>
                        <img src={box} alt="Ícone de caixa para grupos." />
                        <img src={heart} alt="Ícone de coração para favoritos." />
                        <img src={user} alt="Ícone de usuário para as informações de usuário." />
                        <img src={cart} alt="Ícone de carrinho para o carrinho de compras." />
                    </div>
                </div>
            </div>

            <ul className={styles.nav}>
                {['Todas categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia', 'Assinatura'].map((item, index) => (
                    <li key={index}>
                        <button
                            className={`${index === activeIndex ? styles.isActive : ''} ${item === 'Assinatura' ? styles.signatureBtn : ''}`}
                            onClick={() => handleButtonClick(index)}
                        >
                            {item === 'Assinatura' ? (
                                <>
                                    <img src={crown} alt="Ícone de coroa para o botão de assinatura." />
                                    {item}
                                </>
                            ) : item}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Header;