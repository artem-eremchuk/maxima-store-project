import styles from './Message.module.scss';
import React from 'react'

function Message({ message, status }) {
  
  return (
    <div 
      className={(status === 'success') ? styles.succes : styles.error}
    >
      {message}
    </div>
  )
}

export default Message;