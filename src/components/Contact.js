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
		<div style={styles.content}>
			<h1 fontSize>Send me a message!</h1>
			<form style={styles.contactForm} onSubmit={onSubmit}>
				<label style={styles.contactFormLabel}>Name</label>
				<input
					style={styles.contactFormInput}
					type='text'
					name='from_name'
					placeholder='Your name'
					value={toSend.from_name}
					onChange={handleChange}
				/>
				<label style={styles.contactFormLabel}>Message</label>
				<textarea
					style={styles.contactFormTextArea}
					type='text'
					name='message'
					placeholder='Your message'
					value={toSend.message}
					onChange={handleChange}
				/>
				<label style={styles.contactFormLabel}>Email</label>
				<input
					style={styles.contactFormInput}
					type='text'
					name='reply_to'
					placeholder='Your email'
					value={toSend.reply_to}
					onChange={handleChange}
				/>
				<button style={styles.contactFormButton} type='submit'>Submit</button>
			</form>
			<MessageBox message={userMessage.message} success={userMessage.success} />
		</div>
	)
}

export default Contact

const styles = {
  content: {
		marginTop: 90,
    marginLeft: '10%',
    marginRight: '15%',
  },
	contactForm: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	contactFormLabel: {
		fontWeight: 'bold',
		fontFamily: 'roboto'
	},
	contactFormTextArea: {
		fontSize: 20,
		height: 200,
		marginBottom: 10,
		resize: 'none',
	},
	contactFormInput: {
		fontSize: 20,
		marginBottom: 10,
		border: '0.5px solid black',
	},
	contactFormButton: {
		width: '20%',
		height: 40,
		fontSize: 16
	}
}
