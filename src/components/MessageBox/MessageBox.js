import React from 'react'
import './styles.css'

const MessageBox = ({ message, success }) => {
  return (
    (message) && (
      <div className={success ? 'success-box' : 'error-box'}>
        <p>{message}</p>
      </div>
    )
  )
}

export default MessageBox
