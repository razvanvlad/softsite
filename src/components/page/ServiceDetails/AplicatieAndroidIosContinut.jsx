import React from "react";
import { Link } from "react-router-dom";
import ProceduraServiciu from "./ProceduraServiciu";
import ListaServiciiMeniuDreapta from "./ListaServiciiMeniuDreapta";

function AplicatieAndroidIosContinut() {
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
                  Aplicatie Android sau iOS
                </h3>
                <p>
                Oferim servicii de creare de aplicatii Android si iOS pentru a ajuta clientii nostri sa-si promoveze afacerile prin intermediul platformelor mobile. Ne concentram pe intelegerea nevoilor fiecarui client si pe crearea de aplicatii personalizate care se potrivesc obiectivelor lor. Oferim servicii de dezvoltare de aplicatii native si aplicatii hibride, in functie de nevoile fiecarui client. Suntem de asemenea dispusi sa oferim suport tehnic pentru orice probleme intampinate de clientii nostri dupa lansarea aplicatiei. Oferim informatii clare si concise, astfel incat orice client care intra pentru prima data pe site-ul nostru sa inteleaga rapid beneficiile pe care le pot obtine prin intermediul serviciilor noastre de creare de aplicatii Android si iOS.
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

export default AplicatieAndroidIosContinut;
