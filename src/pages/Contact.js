/** @format */

import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='wrapper contact' id='contact'>
      <h1>Send me a message!</h1>
      <p>
        Share your thoughts with me, so we can talk about your next project!
      </p>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input type='text' placeholder='Your name:' />
            <input type='email' placeholder='Your e-mail:' />
          </div>

          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='Write your message here...'></textarea>

          <input className='' type='submit' value='Hire me' />
        </form>
      </div>
    </section>
  );
}

export default Contact;
