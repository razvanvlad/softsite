import React from "react";
import { Link } from "react-router-dom";
import ProceduraServiciu from "./ProceduraServiciu";
import ListaServiciiMeniuDreapta from "./ListaServiciiMeniuDreapta";

function CreareWebsiteContinut() {
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
                Dacă vrei să îți construiești o prezență online puternică și profesională, atunci serviciul nostru de web design este alegerea perfectă pentru tine. Noi oferim servicii complete de proiectare și dezvoltare de site-uri web, care se potrivesc nevoilor și obiectivelor tale. 
                </p>
                <p>
                De la planificarea și proiectarea site-ului până la crearea de conținut și optimizarea pentru motoarele de căutare, noi ne asigurăm că site-ul tău este atractiv, ușor de utilizat și eficient din punct de vedere al afacerii. Contactează-ne astăzi pentru a afla cum putem ajuta afacerea ta să se remarce în mediul online.
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

export default CreareWebsiteContinut;
