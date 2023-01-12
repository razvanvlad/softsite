import React from "react";
import { Link } from "react-router-dom";
import ProceduraServiciu from "./ProceduraServiciu";

function MarketingPromovareContinut() {
  const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <div className="service-details sec-mar-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content">
                <img src={process.env.PUBLIC_URL + '/img/blog/blog-thumnail.jpg'} alt="images service" />
                <h3>
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + '/img/icons/service-details-icon.png'}
                      alt="service icon images"
                    />
                  </i>
                  Creare Website
                </h3>
                <p>
                Vrei să îți dezvolți afacerea prin intermediul canalelor digitale? Noi avem soluția perfectă pentru tine. Oferim servicii de marketing digital care te vor ajuta să îți atragi și să îți menții clienții prin intermediul site-urilor de social media, e-mail marketing și publicitate online. Indiferent de dimensiunea afacerii tale sau de obiectivele tale de afaceri, ne asigurăm că îți oferim o campanie de marketing digital care se potrivește.
                </p>

              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget">
                <h4>Category</h4>
                <ul className="category">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Web Design
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Apps Development
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Software Development
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Motion Graphics
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      UI/UX Design
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Graphic Design
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sidebar-banner">
                <img src={process.env.PUBLIC_URL + '/img/widget-banner-bg.jpg'} alt="Banner images" />
                <div className="banner-inner">
                  <h3>
                    Any Project <span>Call Now.</span>
                    <img
                      className="angle"
                      src={process.env.PUBLIC_URL + "/img/arrow-angle.png"}
                      alt=""
                    />
                  </h3>
                  <a href="tel:11231231234">+1-123-123-1234</a>
                </div>
              </div>
            </div>
          </div>
          <ProceduraServiciu />
        </div>
      </div>
    </>
  );
}

export default MarketingPromovareContinut;
