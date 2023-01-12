import React from "react";
import { Link } from "react-router-dom";
import ProceduraServiciu from "./ProceduraServiciu";
import ListaServiciiMeniuDreapta from "./ListaServiciiMeniuDreapta";

function GazduireContinut() {
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
                  Gazduire
                </h3>
                <p>
                Oferim servicii de gazduire web de calitate si inregistrare de domenii pentru a ajuta clientii nostri sa-si promoveze afacerile online. Ne concentram pe oferirea de servicii de gazduire stabile, rapide si sigure, astfel incat clientii nostri sa poata avea un site web care functioneaza optim. De asemenea, oferim servicii de inregistrare de domenii, astfel incat clientii nostri sa poata alege numele de domeniu potrivit pentru a-si promova afacerile online. Oferim informatii clare si concise, astfel incat orice client care intra pentru prima data pe site-ul nostru sa inteleaga rapid beneficiile pe care le pot obtine prin intermediul serviciilor noastre de gazduire web si inregistrare de domenii.
                </p>
              </div>
            </div>
            <ListaServiciiMeniuDreapta />
          </div>
          <ProceduraServiciu />
        </div>
      </div>
    </>
  );
}

export default GazduireContinut;
