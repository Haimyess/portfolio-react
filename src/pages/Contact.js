/** @format */

import React, { useState, useRef, useEffect } from "react";

import emailjs from "@emailjs/browser";

import "../styles/contact.css";

function Contact() {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setMsg(false);
      console.log("Message is gone!");
    }, 5000);
    return () => clearTimeout(timeOut);
  }, []);

  const form = useRef();

  const [msg, setMsg] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_756pvtm",
        "template_53e6uzp",
        form.current,
        "tXn4UXv0jqe75TlS9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsg(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section className='wrapper container' id='contact'>
      <h1 className='sub-title'>Send me a message!</h1>
      <p className='contact-p'>
        Share your thoughts with me, so we can talk about your next project!
      </p>

      <div className='form-wrapper'>
        <form className='form-container' ref={form} onSubmit={sendEmail}>
          <div className='info-container'>
            <input
              className='name-input'
              type='text'
              placeholder='Your name:'
              name='user_name'
            />
            <input
              className='email-input'
              type='email'
              placeholder='Your e-mail:'
              name='user_email'
            />
          </div>

          <div className='message-container'>
            <textarea
              className='message'
              // cols='30'
              rows='5'
              placeholder='Write your message here...'
              name='user_message'></textarea>
          </div>

          <div className='btn-container'>
            <input className='btn' type='submit' value='Hire me' />
          </div>
        </form>
        {msg && (
          <p className='msg-succ'> Your message has been sent succesfully.</p>
        )}
      </div>
    </section>
  );
}

export default Contact;
