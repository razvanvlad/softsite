import React from 'react';
import ContactForm from './ContactForm';

function ContactWrapper() {
  return (
    <>
     <section className="contact-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <div className="contact-left">
                <div className="sec-title layout2">
                  <span>Intrați în contact</span>
                  <h2>Oferim consultanță gratuită.</h2>
                </div>
                <ul className="social-follow">
                  <li><a rel="noopener noreferrer" href="https://www.facebook.com/softsite.ro"><i className="fab fa-facebook-f" /></a></li>
                  <li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/unlockplatform/"><i className="fab fa-linkedin" /></a></li>
                </ul>
                <div className="informations">
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <h3>Locație</h3>
                      <p>Transilvaniei 1, Baia Mare, MM, România</p>
                      <p>I. P. Voitești 2-4, Cluj Napoca, CJ, România</p>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="info">
                      <h3>Phone</h3>
                      <a href="tel:0040727999900">+40 727 999 900</a>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <h3>Email</h3>
                      <a href="mailto:razvan@softsite.ro">razvan@softsite.ro</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2687.5998137357965!2d23.5636973!3d47.653343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737dc6a7f5ea2db%3A0x1f6cdaf0cb910016!2sUnlockplatform%20S.R.L.-D!5e0!3m2!1sen!2sdk!4v1659184610418!5m2!1sen!2sdk" />
                </div>
              </div>
            </div>
          </div>
          <div className="getin-touch">
            <div className="row">
              <div className="col-md-6 col-lg-7">
                <div className="contact-form wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <h3>Formular contact</h3>
                  <ContactForm />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="call-banner">
                  <img src={process.env.PUBLIC_URL + "/img/call-center.png"} alt="images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default ContactWrapper