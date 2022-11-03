import styles from './Logo.module.scss';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

function Logo({ text }) {
  const isAuth = useSelector(state => state.login.isAuth);

  return (
    <Link to='/' className={isAuth ? styles.logo : styles.logo__disabled}>
      <img src={logo} alt="logo" />
      <h2 className={styles.logo__title}>{text}</h2>
    </Link>
  )
}

export default Logo;