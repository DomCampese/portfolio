import React from 'react'

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
