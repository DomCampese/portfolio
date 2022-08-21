import React from 'react';
import MessageBox from '../MessageBox/MessageBox';
import { useState, useRef } from 'react';
import { send } from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import './contact-styles.css'
import useMobile from '../../hooks/useMobile';

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

  const recaptchaRef = useRef(null);

  const isMobile = useMobile();

  /* Sends an email using emailJS */
  const onSubmit = (e) => {
    e.preventDefault();

    const recaptchaResponseToken = recaptchaRef.current.getValue();
    recaptchaRef.current.reset();

    const params = {
      from_name: toSend.from_name,
      to_name: toSend.to_name,
      message: toSend.message,
      reply_to: toSend.reply_to,
      'g-recaptcha-response': recaptchaResponseToken
    }

    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      params,
      process.env.REACT_APP_EMAILJS_API_KEY
    )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }
        setUserMessage({
          message: 'Your message was sent successfully. I will reply to you shortly!',
          success: true
        });
      })
      .catch((error) => {
        setUserMessage({
          message: 'Unable to send message. Please try again later.',
          success: false
        });
      })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }

  return (
    <div className='content' style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
      <div className='form-wrapper'>
        <h1 className='title' style={(!isMobile) ? { marginBottom: '5px' } : {}}>Contact</h1>
        {(!isMobile) && <div className='underline'></div>}
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
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          />
          <button style={{ marginTop: 10 }} type='submit'>Send Message</button>
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
