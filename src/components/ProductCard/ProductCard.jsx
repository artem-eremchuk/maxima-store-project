import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import cardImage from './../../assets/images/card-image-test.png';
import emptyHeart from './../../assets/images/favorite-empty.svg';
import whiteHeart from './../../assets/images/favorite-white.svg';
import { addCurrentProduct } from '../../store/currentProduct/currentPeoductActions';
import { useDispatch } from 'react-redux';

function ProductCard({ newest, product }) {
  const [ favorite, setFavorite ] = useState(false);
  const [ onMouse, setOnMouse ] = useState(false); 
  const dispatch = useDispatch();

  const handlerOnMouseOver = () => {
    setOnMouse(true);
  }

  const handlerOnMouseOut = () => {
    setOnMouse(false);
  }

  return (
    <div className={newest 
        ? styles.card 
        : styles.catalog__card
      }
      onMouseOver={() => handlerOnMouseOver()} 
      onMouseOut={() => handlerOnMouseOut()} 
    >
      <img 
        className={styles.card__favorite} 
        src={favorite ? whiteHeart : emptyHeart} 
        alt="heart-icon"
        onClick={() => setFavorite(!favorite)} 
      />
      <Link 
        to={`product/${product.id}`}  
        className={styles.card__wrapper}
        onClick={() => dispatch(addCurrentProduct(product))}
      >
        <div className={styles['card-wrapper__img']}>
          <img className={styles.card__img} src={product.titleImage.url} alt='cardImage' />
        </div>
        <div className={styles['card-wrapper__title']}>
          <h3 className={styles.card__title}>{product.title}</h3>
        </div>
        <div className={styles['card-wrapper__price']}>
          <span className={styles.card__price}>{product.price}</span>
          <label 
            className={styles.radio__btn} 
            htmlFor="radioBtn">
              <input 
                type="radio" 
                name='radio-price' 
                id='radioBtn' 
                className={styles.radio__btn_input}
              />
              <div className={styles.custom__radio}></div>
          </label>
        </div>
      </Link>
      {(newest && onMouse) && <>
        <div className={styles.buttons__block}>
          <div className={styles.buttons}>
            <button className={styles.buttons__btn}>-</button>
            <span className={styles.buttons__btn}>1</span>
            <button className={styles.buttons__btn}>+</button>
            <button className={styles.buttons__submit}>В корзину</button>
          </div>
        </div>
        <div className={styles.colors__block}>
          <span className={styles.colors__text}>Цвет - серый</span>
          <div className={styles.colors__list}>
            <div className={styles.colors__color}></div>
          </div>
          <span className={styles.colors__text}>Размеры - Б/Р</span>
        </div>
      </>}
    </div>
  )
}

ProductCard.defaultProps = {
  newest: false,
  product: {
    title: 'Худи “Maxima',
    category: 'clothes',
    description: '',
    price: 1500,
    titleImage: {
      name: '',
      url: cardImage,
    }
  }
}

export default ProductCard;