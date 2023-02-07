import React from "react";
import { Link } from "react-router-dom";
import ProceduraServiciu from "./ProceduraServiciu";
import ListaServiciiMeniuDreapta from "./ListaServiciiMeniuDreapta";

function DesignGraficContinut() {
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
                  Design Grafic
                </h3>
                <p>
                Oferim servicii de design grafic de calitate, care ajuta clientii nostri sa-si promoveze afacerile prin intermediul materialelor de marketing de inalta calitate. Ne concentram pe intelegerea nevoilor fiecarui client si pe crearea de materiale de marketing care se potrivesc obiectivelor lor. Oferim servicii precum design de afise, pliante, brosuri, afise publicitare si multe altele. Suntem de asemenea dispusi sa cream materiale personalizate pentru fiecare client, in functie de nevoile si obiectivele lor. Oferim informatii clare si concise, astfel incat orice client care intra pentru prima data pe site-ul nostru sa inteleaga rapid beneficiile pe care le pot obtine prin intermediul serviciilor noastre de design grafic.
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

export default DesignGraficContinut;
