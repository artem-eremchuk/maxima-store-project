import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__content}>
          <div className={styles.copyright}>
            &copy; Maxima - группа It-компаний
          </div>
          <Logo text={'maxima'}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer;