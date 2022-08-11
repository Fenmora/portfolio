import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dw1cawn",
        "template_mn9noge",
        form.current,
        "lZYSpTe3APOrbPzuw"
      )
      .then(
        (result) => {
          swal("Enviado!", result.text, "success");
          e.target.reset();
        },
        (error) => {
          swal("No se pudo enviar", error.text, "error");
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>fenmora@gmail.com</h5>
            <a href="mailto:fenmora@gmail.com">Sent a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>fenderjmora</h5>
            <a href="https://www.linkedin.com/in/fenderjmora/">
              Sent a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+505 7890-0824</h5>
            <a href="https://api.whatsapp.com/send?phone=+50578900824">
              Sent a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
