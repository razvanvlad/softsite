import React from "react";
import { Link } from "react-router-dom";
import ProceduraServiciu from "./ProceduraServiciu";
import ListaServiciiMeniuDreapta from "./ListaServiciiMeniuDreapta";

function MagazinOnlineContinut() {
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
                  Magazin Online
                </h3>
                <p>
                Dacă vrei să îți deschizi propria afacere online, avem soluția perfectă pentru tine. Noi oferim servicii complete de creare de magazine online, care îți permit să îți vinzi produsele sau serviciile în mediul online. Indiferent de dimensiunea afacerii tale sau de domeniul în care activezi, putem crea un magazin online personalizat, care se potrivește nevoilor tale. De la proiectarea și dezvoltarea magazinului online până la configurarea procesului de plată și livrare, noi ne asigurăm că ai tot suportul de care ai nevoie pentru a îți face afacerea să exceleze în mediul online. Contactează-ne astăzi pentru a afla cum putem ajuta afacerea ta să își atingă potențialul maxim în mediul online.
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

export default MagazinOnlineContinut;
