import styles from './Banner.module.scss';
import banner from '../../assets/images/maxima-store-banner.png';
import React from 'react'

function Banner() {
  return (
    <div className={styles.banner__wrapper}>
      <div className="container">
        <div className={styles.banner}>
          <img  
            className={styles.banner__img} 
            src={banner} 
            alt="banner" />
        </div>
      </div>
    </div>
  )
}

export default Banner;