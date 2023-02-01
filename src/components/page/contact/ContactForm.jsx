import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8hm7w9g', 
      'template_7vw71zb', 
      form.current, 
      '0dNAyYvCzxaByNpIz'
      )
      .then((result) => {
          console.log(result.text);
          console.log("mesaj trimis");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="row">
        <div className="col-12">
          <input type="text" placeholder="Numele și Prenume" name="user_name" />
        </div>
        <div className="col-12">
         <input type="email" placeholder="Adresa de email" name="user_email" />
        </div>
        <div className="col-12">
          <textarea cols={30} rows={10} placeholder="Mesajul tău" name="message" />
          <input type="submit" value="Trimite" />
        </div>  
      </div>
  </form>
  );
};

export default ContactForm;
