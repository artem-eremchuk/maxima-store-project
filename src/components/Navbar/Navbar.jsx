import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const { isAuth } = useSelector(state => state.login);

  return (
    <nav className={styles.nav}>
      <Link 
        className={styles.nav__link} 
        to={'/'}
      >
        Главная
      </Link>
      <Link 
        className={styles.nav__link}
        to={'/catalog'}
      >
        Каталог
      </Link>
      <Link 
        className={styles.nav__link}
        to={'/points'}
      >
        Баллы
      </Link>
      <Link 
        className={styles.nav__link}
        to={'/how-to-order'}
      >
        Как заказать
      </Link>
      {isAuth &&
        <Link 
          className={styles.nav__link}
          to={'/about-us'}
        >
          О нас
        </Link>
      }
    </nav>
  )
}

export default Navbar;