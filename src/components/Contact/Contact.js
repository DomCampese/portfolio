import React from 'react';
import MessageBox from '../MessageBox/MessageBox';
import { useState } from 'react';
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

  const [recaptchaComplete, setRecaptchaComplete] = useState(false);

  const isMobile = useMobile();

  /* Sends an email using emailJS */
  const onSubmit = (e) => {
    e.preventDefault();
    
    send(
      'service_o7dy42h',
      'template_qqjtrml',
      toSend,
      process.env.REACT_APP_RECAPTCHA_SITE_KEY
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
          {(recaptchaComplete)
            ? <button type='submit'>Send Message</button>
            : <ReCAPTCHA
                sitekey={'6Ld2cJAhAAAAAG7c_OHymYbDt_icrrLcUm_YGk68'}
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
