import React from "react";
import { Link } from "react-router-dom";
import ProceduraServiciu from "./ProceduraServiciu";
import ListaServiciiMeniuDreapta from "./ListaServiciiMeniuDreapta";

function MarketingPromovareContinut() {
  const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <div className="service-details sec-mar-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content">
                {/* <img src={process.env.PUBLIC_URL + '/img/blog/blog-thumnail.jpg'} alt="images service" /> */}
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
<ListaServiciiMeniuDreapta />
          <ProceduraServiciu />
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketingPromovareContinut;
