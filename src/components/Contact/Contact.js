import React from 'react';
import MessageBox from '../MessageBox/MessageBox';
import { useState, useRef } from 'react';
import { send } from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import './contact-styles.css'
import Header from '../reusable/Header'

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

  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const recaptchaRef = useRef(null);

  /* Sends an email using emailJS */
  const onSubmit = (e) => {
    e.preventDefault();

    const recaptchaResponseToken = recaptchaRef.current.getValue();
    recaptchaRef.current.reset();

    const params = {
      ...toSend,
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
    <div className='content full-height'>
      <Header>Contact</Header>
      <div className='form-wrapper'>
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
          {siteKey &&
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={siteKey}
            />
          }
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
