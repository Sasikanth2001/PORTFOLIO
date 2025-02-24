import { Container, Col, Row, Button } from 'react-bootstrap'
import React, { useRef, useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_emr4064', 'template_5ggsz2q', form.current, 'p6jCEGdT-VNaPN0QQ')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);

        // Hide the message after 1 second
        setTimeout(() => {
          setMessageSent(false);
        }, 1500);

        e.target.reset(); // Reset the form after submission
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container style={{ padding: '100px' }} id='contact' >
      <Row >
        <Col md={6} className="c-left">
          <h1 className='fw-bold'>Get in Touch</h1>
          <h1 className="yellow fw-bold">Contact me</h1>
          <Container style={{ padding: '30px' }}>
            <Row>
              <Col md={12} className="contact-social text-center">
                <a href="https://github.com/Sasikanth2001" target="_blank" rel="noreferrer" className="icon-color text-black contact-social-icons">
                  <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/r-sasikanth-6b5b30235/" target="_blank" rel="noreferrer" className="icon-color contact-social-icons">
                  <FaLinkedinIn className='text-primary' />
                </a>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className='user' placeholder='Enter Your Name' required />
            <input type="email" name="user_email" className='user' placeholder='Enter Your Email' required />
            <textarea name="message" className='user' placeholder='Message' required />
            <Button type="submit" className="button ">Send</Button>

            {/* Success message below the button */}
            {messageSent && (
              <div style={{ marginTop: '10px', color: 'green', fontWeight: 'bold' }}>
                ✅ Message sended successfully!
              </div>
            )}
          </form>
        </Col>
      </Row>
    </Container>
  );
};
