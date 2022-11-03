import styles from './CartProduct.module.scss';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../store/cart/cartActions';

function CartProduct({ 
  product,
  handleTotalSum,
  deleteProductFromCart
}) {
  const { id, title, size, color, price, titleImage } = product;

  const [ count, setCount ] = useState(1);
  const dispatch = useDispatch();

  const incrementCount = () => setCount(state => state + 1);
  const decrementCount = () => setCount(state => state - 1);

  if(count < 1) {
    setCount(1);
  }
  
  useEffect(() => {
    handleTotalSum(id, count)
  }, [count])

  return (
    <div className={styles.cart__product}>
      <div className={styles.cart__product_img}>
        <img 
          className={styles.cart__product_image} 
          src={titleImage.url} 
          alt={title} 
        />
      </div>
      <div className={styles.cart__product_info}>
        <h3 className={styles.cart__product_title}>{title}</h3>
        <span className={styles.cart__product_color}>{`Цвет: ${color}`}</span>
        <span className={styles.cart__product_size}>{`Размер: ${size}`}</span>
        <span className={styles.cart__product_count}>{`Количествоё: ${0}`}</span>
      </div>
      <div className={styles.cart__product_control}>
        <div className={styles.cart__product_top}>
          <h3 className={styles.cart__product_price}>{`${price * count} ₽`}</h3>
          <RiDeleteBin6Line 
            className={styles.cart__product_remove} 
            onClick={() => {
              deleteProductFromCart(id);
              dispatch(deleteFromCart(id));
            }}
          />
        </div>
        <div className={styles.cart__product_buttons}>
          <button 
            className={styles.cart__product_btn}
            onClick={() => {
              decrementCount()
            }} 
          >-</button>
          <button className={styles.cart__product_btn}>{count}</button>
          <button 
            className={styles.cart__product_btn}
            onClick={() => {
              incrementCount()
            }}
          >+</button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct;