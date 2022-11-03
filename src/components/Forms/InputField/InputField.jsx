import styles from './InputField.module.scss';

function InputField({ 
  name, 
  type, 
  placeholder, 
  errors, 
  register 
}) {
  return (
    <>
      <label 
        className={styles.input__label}
        htmlFor={name}>
        {placeholder}    
      </label>
      <input 
        className={(errors[name]?.message) 
          ? styles.input__field_error  
          : styles.input__field
        }
        type={type}
        name={name} 
        id={name}
        placeholder={placeholder}
        {...register } 
      />
      {<div className={styles.error}>
        {errors[name]?.message}
      </div>}
    </>
  )
}

export default InputField;