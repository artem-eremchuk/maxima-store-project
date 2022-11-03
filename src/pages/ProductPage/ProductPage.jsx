import styles from './ProductPage.module.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './../../store/cart/cartActions'; 
import { addCurrentProduct } from '../../store/currentProduct/currentPeoductActions';

function ProductPage() {
  const currentProduct = useSelector(state => state.currentProduct) || JSON.parse(localStorage.getItem('currentProduct'));
  
  useEffect(() => {
    localStorage.setItem('currentProduct', JSON.stringify(currentProduct));

    dispatch(addCurrentProduct(currentProduct));
  }, []);

  const dispatch = useDispatch();

  const {
    id, 
    title, 
    price, 
    description, 
    titleImage 
  } = currentProduct;

  return (
    <div className='container'>
      <div className={styles.product__wrapper}>
        <div className={styles.product__img}>
          <img className={styles.product__image} src={titleImage.url} alt={title} />
        </div>
        <div className={styles.product__info}>
          <h3 className={styles.product__title}>{title}</h3>
          <p className={styles.product__description}>{description}</p>
          <div className={styles.product__price}>
            {`${price} ₽`}
          </div>
          <div className={styles.product__btns}>
            <button 
              className={styles.product__btn}
              onClick={() => dispatch(addToCart(id))}
            >
              В корзину
            </button>
            <button className={styles.product__btn}>
              В избранное
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;