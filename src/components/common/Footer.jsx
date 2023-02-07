import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  const scrollTop=()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <footer className={props.footerAddclass} >
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link scrollTo={scrollTop} to={"/"}>
                      <img src={process.env.PUBLIC_URL +"/img/softsite-logo/softsite-logo-white.svg"} alt="FooterImg" />
                    </Link>
                  </div>
                  <p>
                  Oferim o gamă completă de servicii IT, noi suntem partenerul firmei tale. Oferim profesionalism și seriozitate în orice colaborare. Vă putem dezvolta, automatiza și promova afacerea.
                  </p>
                  <ul className="social-media-icons">
                    <li>
                      <a href="https://www.facebook.com/softsite.ro">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/unlockplatform/">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@razvanvladpop">
                        <i className="fab fa-tiktok" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/razvanvladpop/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Listă Servicii</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/creare-website`} onClick={scrollTop}>Creare Website</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/dezvoltare-software`} onClick={scrollTop}>Dezvoltare Software</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/magazin-online`} onClick={scrollTop}>Magazin Online</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/marketing-si-promovare`} onClick={scrollTop}>Marketing și Promovare</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/gazduire`} onClick={scrollTop}>Găzduire</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/mentenanta-si-suport`} onClick={scrollTop}>Mentenanță și Suport</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/automatizar-rpa`} onClick={scrollTop}>Automatizări RPA</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/aplicatie-android-si-ios`} onClick={scrollTop}>Aplicație Android și iOS</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/furnizare-echipamente-it`} onClick={scrollTop}>Furnizare Echipamente IT</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Meniu Site</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/despre-noi`} onClick={scrollTop}>Despre Noi</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/servicii`} onClick={scrollTop}>Servicii</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/proiecte`} onClick={scrollTop}>Proiecte</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={scrollTop}>Cariere</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={scrollTop}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Date de contact</h4>
                  <div className="number">
                    <div className="num-icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="phone">
                      <a href="tel:0040727999900">+40 727 999 900</a>
                    </div>
                  </div>
                  <div className="office-mail">
                    <div className="mail-icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="email">
                      <a href="mailto:razvan@softsite.ro">razvan@softsite.ro</a>
                    </div>
                  </div>
                  <div className="address">
                    <div className="address-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <p>Strada Nouă 21-25, Nr. 2, Apahida, CJ, România</p>
                  </div>
                  <div className="address2">
                    <div className="address-icon2">                      
                    </div>                        
                     <a target="_blank" href="https://anpc.ro/ce-este-sal/"><img src={process.env.PUBLIC_URL + '/img/logo-anpc/placheta_litigii.svg'}  alt="logo-anpc-img" />  </a>
                  </div>
                  <div className="address2">
                    <div className="address-icon2">                      
                    </div>                        
                     <a target="_blank" href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"><img src={process.env.PUBLIC_URL + '/img/logo-anpc/placheta_sal.svg'} href="" alt="logo-sal-img" />  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 col-lg-4 col-xl-5">
                <div className="copy-txt">
                  <span>
                    Copyright 2022 <b>Unlock Platform SRL-D</b> | Design By{" "}
                    <Link to={"https://softsite.ro"}>SoftSite</Link>
                  </span>
                </div>
              </div>
              {/* <div className="col-12 col-md-8 col-lg-8 col-xl-7">
                <ul className="footer-bottom-menu">
                  <li>
                    <Link to={"#"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Terms of Use</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
