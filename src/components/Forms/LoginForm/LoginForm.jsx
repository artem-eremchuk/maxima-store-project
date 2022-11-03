import styles from './LoginForm.module.scss';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../store/login/loginActions';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Message from '../../Message/Message';
import InputField from '../InputField/InputField';
import React, { useEffect } from 'react';

function LoginForm(){
  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm({
    defaultValues: {
      login: '',
      password: ''    
    }
  });

  const { message, status } = useSelector(state => state.login);
  const isAuth = useSelector(state => state.login.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {    
    dispatch(loginAction(data));
  }

  useEffect(() => {
    if(isAuth){
      navigate('/my-account');
    }
  }, [isAuth])

  return (
    (<div className={styles['form-wrapper']}>
        <form 
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className={styles.form__header}>Авторизация</h3>
          <div className={styles.form__content}>
            <div className={styles.form__group}>
              <InputField 
                name='login' 
                placeholder='Логин' 
                type='text'
                errors={errors} 
                register={{...register('login', { 
                  required: 'Обязательное поле', 
                  minLength: {
                    value: 8,
                    message: 'Минимальная длина 8 символов'
                  } 
                })}}
              />
            </div>
            <div className={styles.form__group}>
              <InputField 
                name='password' 
                placeholder='Пароль' 
                type='password'
                errors={errors} 
                register={{...register('password', { 
                  required: 'Обязательное поле', 
                  minLength: {
                    value: 8,
                    message: 'Минимальная длина 8 символов'
                  } 
                })}}
              />
            </div>
            <div className={styles.form__group}>
              <button 
                className={styles.form__btn} 
                type='submit'>
                Войти
              </button>
              {message && <Message message={message} status={status}/>}
              <div className={styles.form__remember}>
                <div className={styles.checkbox}>
                  <label>
                    <input type="checkbox" name='remember-me'/>
                    Запомнить
                  </label>
                </div>
                <Link 
                  to="#"
                  className={styles['reset-password-link']}>
                  Забыли пароль?
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  )
}

export default LoginForm;