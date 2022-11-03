import React from 'react';
import styles from './MainScreen.module.scss';
import { Link } from 'react-router-dom';
import mainScreenLogoText from './../../assets/images/main-screen-logo-text.png';
import mainScreenLogoImg from './../../assets/images/main-screen-logo-img.png';
import mainScreenImg from './../../assets/images/main-screen-img.png';

function MainScreen() {
  return (
    <div className='container'>
      <div className={styles.main__screen_wrapper}>
        <div className={`${styles.main__screen_block} ${styles.main__screen_block_left}`}>
          <div className={styles.main__screen_images}>
            <img 
              className={styles.main__screen_logo_img} 
              src={mainScreenLogoImg} 
              alt="main-screen-logo-img" 
            />
            <img 
              className={styles.main__screen_logo_img} 
              src={mainScreenLogoText} alt="main-screen-logo-text" 
            />
          </div>
          <p className={styles.main__screen_text}>
            Онлайн-магазин корпоративного мерча Maxima
            Валюта здесь - баллы!
          </p>
          <Link 
            to={'/catalog'}
            className={styles.main__screen_link}
          >
              Перейти в каталог
          </Link>
        </div>
        <div className={`${styles.main__screen_block} ${styles.main__screen_block_right}`}>
          <img  className={styles.main__screen_img} src={mainScreenImg} alt="main-screen-img" />
        </div>
      </div>
    </div>
  )
}

export default MainScreen;