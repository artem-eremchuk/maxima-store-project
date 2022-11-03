import React from 'react';
import styles from './CatalogBlock.module.scss';
import { Link } from 'react-router-dom';
import clothes from './../../assets/images/clothes.png';
import backpage from './../../assets/images/backpage.png';
import notebook from './../../assets/images/notebook.png';

function CatalogBlock() {
  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <h2 className={styles.title}>Каталог</h2>
        <div className={styles.catalog__block}>
          <div className={styles.catalog__elements}>
            <Link to={'catalog'} className={styles.element__wrapper}>
              <div className={styles.element__img}>
                <img src={clothes} alt="clothes" />
              </div>
              <h3 className={styles.element__title}>Одежда</h3>
            </Link>
            <Link to={'catalog'} className={styles.element__wrapper}>
              <div className={styles.element__img}>
                <img src={backpage} alt="backpage" />
              </div>
              <h3 className={styles.element__title}>Аксессуары</h3>
            </Link>
            <Link to={'catalog'} className={styles.element__wrapper}>
              <div className={styles.element__img}>
                <img src={notebook} alt="notebook" />
              </div>
              <h3 className={styles.element__title}>Канцелярия</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CatalogBlock