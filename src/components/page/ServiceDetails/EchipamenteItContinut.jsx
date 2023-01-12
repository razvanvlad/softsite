import React from "react";
import { Link } from "react-router-dom";
import ListaServiciiMeniuDreapta from "./ListaServiciiMeniuDreapta";


function EchipamenteItContinut() {
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
                  Echipamente IT
                </h3>
                <p>
                Importăm produse de la distribuitori autorizați de echipamente IT și telefoane mobile.
                </p>
              </div>
            </div>
            <ListaServiciiMeniuDreapta />
          </div>
        </div>
      </div>
    </>
  );
}

export default EchipamenteItContinut;
