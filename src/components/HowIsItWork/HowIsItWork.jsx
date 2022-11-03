import React from 'react';
import styles from './HowIsItWork.module.scss';
import { howIsItWorkData } from './../../howIsItWorkData';

function HowIsItWork() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Как это работает?</h2>
      {howIsItWorkData.map(element => {
        return (
          <div key={element.id} className={styles.block}>
            <div className={styles.block__info}>
              <div className={styles.block__info_img}>
                <img src={element.imgDigital} alt={element.title} />
              </div>
              <div className={styles.block__info_text}>
                <h3 className={styles.block__info_title}>
                  {element.title}
                </h3>
                <p className={styles.block__info_description}>
                  {element.description}
                </p>
              </div>
            </div>
            <div className={styles.block__img}>
              <img src={element.image} alt={element.title} />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default HowIsItWork;