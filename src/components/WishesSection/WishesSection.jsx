import React from 'react';
import styles from './WishesSection.module.scss';
import purchases from './../../assets/images/wishes-purchases.png';

function WishesSection() {
  return (
    <section className={styles.wishes}>
      <div className={styles.wishes__block}>
        <img 
          className={styles.wishes__img} 
          src={purchases} alt="purchases" 
        />
      </div>
      <div className={styles.wishes__block}>
        <p className={styles.wishes__text}>
          {'Удачных покупок ;)'}
        </p>
      </div>
    </section>
  )
}

export default WishesSection;