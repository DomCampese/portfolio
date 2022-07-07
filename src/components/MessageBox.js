import React from 'react'

const MessageBox = ({ message, success }) => {
  return (
    (message) && (
      <div style={success ? styles.successBox : styles.errorBox}>
        <p>{message}</p>
      </div>
    )
  )
}

export default MessageBox

const styles = {
  successBox: {
    opacity: '.8',
    display: 'flex',
    alignItems: 'center',
    height: 40,
    width: '100%',
    margin: '3vh auto',
    color: '#270',
    backgroundColor: '#DFF2BF',
    padding: 10
  },
  errorBox: {
    opacity: '.8',
    display: 'flex',
    alignItems: 'center',
    height: 40,
    width: '100%',
    margin: '3vh auto',
    color: '#D8000C',
    backgroundColor: '#FFBABA',
    paddingLeft: 10
  }
}
