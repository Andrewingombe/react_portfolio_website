import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarked,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kos1zco",
        "template_kn8gqht",
        formRef.current,
        "user_QNsTqucus6vfNkBEYYdni"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact__section" id="contacts">
      <div className="contact__left">
        <div className="intro__wrapper">
          <h4 className="conatct__intro">Contact</h4>
        </div>
        <h2 className="contact__title">Let's discuss your project</h2>
        <div className="contact__details">
          <div className="contact__item">
            <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
            <p className="contact__text">+260-979-031-616</p>
          </div>
          <div className="contact__item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p className="contact__text">ingombe.ani@gmail.com</p>
          </div>
          <div className="contact__item">
            <FontAwesomeIcon icon={faMapMarked} className="icon" />
            <p className="contact__text">
              Mitec, Off independence avenue, Solwezi, Zambia.
            </p>
          </div>
        </div>
      </div>
      <div className="contact__right">
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="form__input">
            <input type="text" name="user__name" placeholder="Name" />
          </div>
          <div className="form__input">
            <input type="text" name="user__subject" placeholder="Subject" />
          </div>
          <div className="form__input">
            <input type="text" name="user__email" placeholder="Email" />
          </div>
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
