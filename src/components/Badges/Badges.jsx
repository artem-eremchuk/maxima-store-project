import styles from './Badges.module.scss';
import heart from '../../assets/images/heart.svg';
import cart from '../../assets/images/cart.svg';
import user from '../../assets/images/user.svg';
import { Link } from 'react-router-dom';

function Badges() {
  return (
    <div className={styles.badges}>
      <Link to={'/favorites'}>
        <img src={heart} alt="heart" />
      </Link>
      <Link to={'/cart'}>
        <img src={cart} alt="cart" />
      </Link>
      <Link to={'/my-account'}>
        <img src={user} alt="user" />
      </Link>
    </div>
  )
}

export default Badges;