import React from 'react'
import { MdCancel } from 'react-icons/md'
import './message-box-styles.css'

const MessageBox = ({ message, success, onDismiss }) => {
  return (
    (message) && (
      <div className={success ? 'success-box' : 'error-box'}>
        <p>{message}</p>
        <button 
          className='dismiss-button' 
          onClick={() => {
            onDismiss();
          }}>
            <MdCancel/>
        </button>
      </div>
    )
  )
}

export default MessageBox
