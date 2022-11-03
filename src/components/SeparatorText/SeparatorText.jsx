import React from 'react';
import styles from './SeparatorText.module.scss';

function SeparatorText() {
  return (
    <div className={styles.separotor__line}>
      <div className={styles.separator__text}>
        Получи крутой мерч за баллы!
      </div>
    </div>
  )
}

export default SeparatorText;