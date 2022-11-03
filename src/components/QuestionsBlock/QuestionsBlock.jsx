import styles from './QuestionsBlock.module.scss';
import React from 'react';
import questions from './../../assets/images/questions.png';

function QuestionsBlock() {
  return (
    <section>
      <div  className={styles.questions__wrapper}>
        <div className='container'>
          <div className={styles.questions}>
            <div className={styles.questions__form_wrapper}>
              <h2 className={styles.questions__form_title}>Остались вопросы?</h2>
              <p className={styles.questions__form_description}>Если у Вас имеются вопросы, Вам необходимо больше информации, Вы всегда можете обратиться в нашу службу технической поддержки,и мы быстро придем к Вам на помощь!</p>
              <form className={styles.questions__form}>
                <input className={styles.questions__form_input} type="text" placeholder="Задать вопрос"/>
                <button className={styles.questions__form_btn} type='submit'>Отправить</button>
              </form>
            </div>
            <div className={styles.questions__img}>
              <img className={styles.questions__image} src={questions} alt="questions-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuestionsBlock;