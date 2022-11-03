import styles from './Spinner.module.scss';
import React from 'react';
import { SpinnerRoundFilled } from 'spinners-react';

function Spinners() {
  return (
    <div className={styles.spinner}>
      <SpinnerRoundFilled 
        size={'20%'}
        style={{
          'backgroundColor': '#F3F3F3',
          'color': '4B267E',
          'margin': '0px',
        }} 
      />
    </div>
  )
}

export default Spinners;