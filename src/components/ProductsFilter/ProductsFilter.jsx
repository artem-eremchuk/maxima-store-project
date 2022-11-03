import React, { useState } from 'react';
import styles from './ProductsFilter.module.scss';

function ProductsFilter({ catalogFilter, category }) {
  const buttons = [
    {
      category: 'all',
      value: 'Все категории'
    },
    {
      category: 'clothes',
      value: 'Одежда'
    },
    {
      category: 'accessories',
      value: 'Акссесуары'
    },
    {
      category: 'office',
      value: 'Канцелярия'
    }
  ];

  const [ 
    isActive, 
    setIsActive 
  ] = useState(category)

  return (
    <div className={styles.filter__wrapper}>
      {buttons.map(({category, value}) => {
        return (
          <input 
            key={category}
            type={'button'} 
            className={(category === isActive)
              ? styles.filter__button_active 
              : styles.filter__button
            }
            value={value}
            onClick={() => {
              setIsActive(category)
              catalogFilter(category)
            }} 
          />
        )
      })}
    </div>
  )
}

export default ProductsFilter;