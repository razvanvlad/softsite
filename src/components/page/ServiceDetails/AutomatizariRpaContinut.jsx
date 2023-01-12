import React from "react";
import { Link } from "react-router-dom";
import ProceduraServiciu from "./ProceduraServiciu";
import ListaServiciiMeniuDreapta from "./ListaServiciiMeniuDreapta";

function AutomatizariRpaContinut() {
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
                  Automatizari RPA (Robotic Process Automation)
                </h3>
                <p>
                Oferim servicii de automatizare RPA (robotic process automation) pentru a ajuta clientii nostri sa eficientizeze procesele lor de afaceri. RPA este o tehnologie care foloseste roboti software pentru a automatiza anumite sarcini repetitive, astfel incat sa poata fi efectuate mai rapid si mai precis. Ne concentram pe oferirea de servicii de automatizare RPA personalizate, astfel incat sa putem identifica procesele de afaceri repetitive ale fiecarui client si sa le automatizam pentru a le eficientiza. Oferim informatii clare si concise, astfel incat orice client care intra pentru prima data pe site-ul nostru sa inteleaga rapid beneficiile pe care le pot obtine prin intermediul serviciilor noastre de automatizare RPA.
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

export default AutomatizariRpaContinut;
