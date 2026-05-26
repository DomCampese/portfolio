import React, { useState, useRef } from 'react';
import { send } from '@emailjs/browser';
import ReCAPTCHABase from 'react-google-recaptcha';
import './contact-styles.css';
import { Header } from '@components/reusable';
import MessageBox from '@components/MessageBox/MessageBox';

type ReCaptchaHandle = Pick<ReCAPTCHABase, 'getValue' | 'reset'>
const ReCAPTCHA = ReCAPTCHABase as unknown as React.ComponentType<{
  sitekey: string
  ref?: React.Ref<ReCaptchaHandle>
}>;

interface ContactForm {
  from_name: string
  to_name: string
  message: string
  reply_to: string
}

const Contact = () => {
  const [toSend, setToSend] = useState<ContactForm>({
    from_name: '',
    to_name: 'Dom',
    message: '',
    reply_to: '',
  });

  const [userMessage, setUserMessage] = useState({
    message: '',
    success: false,
  });

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;
  const recaptchaRef = useRef<ReCaptchaHandle>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recaptchaResponseToken = recaptchaRef.current?.getValue() ?? '';
    recaptchaRef.current?.reset();

    const params = {
      ...toSend,
      'g-recaptcha-response': recaptchaResponseToken,
    };

    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
      params,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
    )
      .then((response) => {
        if (response.status !== 200) throw new Error();
        setUserMessage({
          message: 'Your message was sent successfully. I will reply to you shortly!',
          success: true,
        });
      })
      .catch(() => {
        setUserMessage({
          message: 'Unable to send message. Please try again later.',
          success: false,
        });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='content contact-section full-height'>
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
          {siteKey && (
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={siteKey}
            />
          )}
          <button style={{ marginTop: 10 }} type='submit'>Send Message</button>
        </form>
        <MessageBox
          message={userMessage.message}
          success={userMessage.success}
          onDismiss={() => setUserMessage({ message: '', success: false })}
        />
      </div>
    </div>
  );
};

export default Contact;
