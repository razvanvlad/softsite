import React from "react";
import { Link } from "react-router-dom";
import ProceduraServiciu from "./ProceduraServiciu";
import ListaServiciiMeniuDreapta from "./ListaServiciiMeniuDreapta";

function DezvoltareSoftwareContinut() {
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
                  Dezvoltare Software
                </h3>
                <p>
                Vrei să îți îmbunătățești procesele de afaceri prin intermediul software-ului de top? 
                <br></br>
                Noi avem soluția perfectă pentru tine. Oferta noastră include o gamă completă de software de gestionare a afacerilor, inclusiv soluții CRM și ERP, care îți permit să îți gestionezi afacerea eficient și să îți îmbunătățești productivitatea. 
                </p>
                <p>
                Indiferent de dimensiunea afacerii tale sau de domeniul în care activezi, ne asigurăm că îți oferim o soluție software care se potrivește nevoilor tale.
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

export default DezvoltareSoftwareContinut;
