import styles from './CartPage.module.scss';
import React, { useState, useEffect } from 'react';
import CartProduct from '../../components/CartProduct/CartProduct';
import { api } from '../../api/api';

function CartPage() {
  const [ currentCart, setCurrenCart ] = useState([]);
  const [ totalSum, setTotalSum ] = useState(0);

  const getCurrentCart = async () => {
    const cart = await api.getCart().then(res => res.data);

    const newCart = cart.map(product => {
      return {
        ...product,
        totalPrice: 0, 
        count: 0
      }
    })

    setCurrenCart(newCart);
  }

  const deleteProductFromCart = (id) => {
    const newCart = currentCart.filter(product => product.id !== id);
    setCurrenCart(newCart);
  }

  const handleTotalSum = (id, count) => {
    const currentItem = {
      ...currentCart.filter(product => product.id === id)[0], 
      totalPrice: 0
    };
    
    currentItem.totalPrice = currentItem.price * count;
    currentItem.count = count;
    
    const newCurrentCart = currentCart.map(product => {
      if(product.id === id){
        return currentItem;
      }

      return {
        ...product,
        totalPrice: (!product.totalPrice) ? product.price : product.totalPrice,
      }
    })
    
    setCurrenCart(newCurrentCart);
  }

  useEffect(() => {
    getCurrentCart();
  }, [])

  useEffect(() => {
    const totalSum = currentCart.reduce((acc, product) => {
      return acc + (Number(product.totalPrice || product.price))
    }, 0)

    setTotalSum(totalSum)
  }, [currentCart])

  return (
    <div className='container'>
      <div className={styles.cart__wrapper}>
        <div className={styles.cart__products}>
          {currentCart
            .map(product => <CartProduct
                key={product.id} 
                product={product}
                handleTotalSum={handleTotalSum}
                deleteProductFromCart={deleteProductFromCart}
            />
          )}
        </div>
        <div className={styles.cart__total}>
          <h3 className={styles.cart__total_title}>Сумма заказа</h3>
          <div className={styles.cart__total_fields}>
            <div className={styles.cart__total_field}>
              <span className={styles.field__title}>Стоимость товаров</span>
              <span className={styles.field__digit}>{totalSum}</span>
            </div>
            <div className={styles.cart__total_field}>
              <span className={styles.field__title}>Доставка</span>
              <span className={styles.field__digit}>0</span>
            </div>
            <div className={styles.cart__total_field}>
              <span className={styles.field__title}>Сумма скидки</span>     
              <span className={styles.field__digit}>0</span>
            </div>
          </div>
          <div className={styles.cart__total_sum} >
            <h3 className={styles.cart__sum_title}>Итоговая сумма</h3>
            <span className={styles.cart__sum_digit}>{`${totalSum} ₽`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage;