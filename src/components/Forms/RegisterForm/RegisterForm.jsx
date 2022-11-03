import styles from './RegisterForm.module.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../../store/register/registerActions';
import { loginAction } from '../../../store/login/loginActions';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import InputField from '../InputField/InputField';
import Message from '../../Message/Message';

function RegisterForm(){
  const { 
    register, 
    handleSubmit, 
    reset,
    watch, 
    formState: { errors }
  } = useForm({
    defaultValues: {
      login: '',
      firstName: '',
      lastName: '',
      password: ''    
    }
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message, status } = useSelector(state => state.register);

  useEffect(() => {
    if(status === 'success'){
      const [login, password] = watch(['login', 'password']);

      if(login && password){
        dispatch(loginAction({login, password}));
      }

      const timeoutID = setTimeout(() => {
        reset();
        navigate('/');
      }, 1000);

      return () => {
        clearTimeout(timeoutID);
      }
    }
  }, [status])

  const onSubmit = (data) => {
    dispatch(registerAction(data));
  }

  return (
    <div className={styles['form-wrapper']}>
      <form 
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className={styles.form__header}>Регистрация</h3>
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
              name='firstName' 
              placeholder='Имя' 
              type='text'
              errors={errors} 
              register={{...register('firstName', { 
                required: 'Обязательное поле'
              })}}
            />
          </div>
          <div className={styles.form__group}>
            <InputField 
              name='lastName' 
              placeholder='Фамилия' 
              type='text'
              errors={errors} 
              register={{...register('lastName', { 
                required: 'Обязательное поле'
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
              Зарегистрироваться
            </button>
          </div>
          {message && 
            <Message message={message} status={status}/>
          } 
        </div>
      </form>
    </div>
  )
}

export default RegisterForm;