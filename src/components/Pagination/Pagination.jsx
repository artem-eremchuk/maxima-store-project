import styles from './Pagination.module.scss';
import React from 'react';
import { Link } from 'react-router-dom'; 

function Pagination({ 
  cardsPerPage, 
  totalCards, 
  paginate,
  handleCatalogRef
}) {
  const cardNumber = [
    ...Array(Math.ceil(totalCards / cardsPerPage)) 
  ].map((_, i) => ++i);

  return (
    <nav>
      <ul className={styles.pagination}>
        {cardNumber.map(number => {
          return ( 
            <li 
              key={number} 
              className={styles.pagination__item}
              onClick={() => {
                  paginate(number - 1)
                  handleCatalogRef();
                }
              }
            >
            <Link to={'#'} className={styles.pagination__link}>
              {number}
            </Link>
          </li>)
        })}
      </ul>
    </nav>
  )
}

export default Pagination;