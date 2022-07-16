import React from 'react';
import MessageBox from './MessageBox';
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
  const [toSend, setToSend] = useState({
      from_name: '',
      to_name: 'Dom',
      message: '',
      reply_to: '',
    });
    
  const [userMessage, setUserMessage] = useState({
    message: '',
    success: false
  });

  /* Sends an email using emailJS */
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_zh6sr48',
      'template_qqjtrml',
      toSend,
      'user_V9malAR9KI5x2nSxzMMzE'
    )
      .then((response) => {
        setUserMessage({
          message: 'Your message was sent successfully. I will reply to you shortly!',
          success: true
        });
      })
      .catch((error) => {
        setUserMessage({
          message: 'Something went wrong. Please try again.',
          success: false
        });
      })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }

  return (
    <div className="content">
        <h1>Send me a message!</h1>
        <form className='contact-form' onSubmit={onSubmit}>
            <label>Name</label>
            <input
              type='text'
              name='from_name'
              placeholder='Your name'
              value={toSend.from_name}
              onChange={handleChange}
            />
            <label>Message</label>
            <textarea
              type='text'
              name='message'
              placeholder='Your message'
              value={toSend.message}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              type='text'
              name='reply_to'
              placeholder='Your email'
              value={toSend.reply_to}
              onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
        <MessageBox message={userMessage.message} success={userMessage.success} />
    </div>
  )
}

export default Contact
