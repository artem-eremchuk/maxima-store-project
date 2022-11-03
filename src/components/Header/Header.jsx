import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Badges from '../Badges/Badges';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <Logo text={'store'}/>
          <Navbar />
          <Badges />
        </div> 
      </div>
    </header>
  )
}

export default Header;