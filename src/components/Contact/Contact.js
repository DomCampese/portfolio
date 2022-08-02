import React from 'react';
import MessageBox from '../MessageBox/MessageBox';
import { useState } from 'react';
import { send } from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import './contact-styles.css'

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
  
  // TODO: set to false by default once recaptcha is set up
  const [recaptchaComplete, setRecaptchaComplete] = useState(true);

  /* Sends an email using emailJS */
  const onSubmit = (e) => {
    e.preventDefault();
    
    setUserMessage({
      message: 'Currently in development mode.',
      success: true
    });
    
    // send(
    //   'service_o7dy42h',
    //   'template_qqjtrml',
    //   toSend,
    //   'user_V9malAR9KI5x2nSxzMMzE'
    // )
    //   .then((response) => {
    //     setUserMessage({
    //       message: 'Your message was sent successfully. I will reply to you shortly!',
    //       success: true
    //     });
    //   })
    //   .catch((error) => {
    //     setUserMessage({
    //       message: 'Something went wrong. Please try again.',
    //       success: false
    //     });
    //   })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }

  return (
    <div className='content' style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='form-wrapper'>
        <h1 className='title'>Contact</h1>
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
          {(recaptchaComplete)
            ? <button type='submit'>Send Message</button>
            : <ReCAPTCHA
              sitekey={'6LfKyjshAAAAAEEVmIhaIrt-HgufZlAAG5gkf7p8'}
              onChange={() => {
                setRecaptchaComplete(true);
              }}
            />
          }
        </form>
        <MessageBox
          message={userMessage.message}
          success={userMessage.success}
          onDismiss={() => {
            setUserMessage({
              message: '',
              success: false
            })}}
        />
      </div>
    </div>
  )
}

export default Contact
