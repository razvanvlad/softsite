import React from 'react'
import { Link } from "react-router-dom";

function ListaServiciiMeniuDreapta() {
  const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
            <div className="col-lg-4">
              <div className="sidebar-widget">
                <h4>Listă Servicii</h4>
                <ul className="category">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/creare-website`} onClick={scrollTop}>
                      Creare Website
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/dezvoltare-software`} onClick={scrollTop}>
                      Dezvoltare Software
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/magazin-online`} onClick={scrollTop}>
                      Magazin Online 
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/marketing-si-promovare`} onClick={scrollTop}>
                      Marketing și Promovare
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/design-grafic`} onClick={scrollTop}>
                      Design Grafic
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/gazduire`} onClick={scrollTop}>
                      Găzduire
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/mentenanta-si-suport`} onClick={scrollTop}>
                      Mentenanță și Suport
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/automatizari-rpa`} onClick={scrollTop}>
                      Automatizări RPA
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/aplicatie-android-si-ios`} onClick={scrollTop}>
                      Aplicație Android și iOS
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/furnizare-echipamente-it`} onClick={scrollTop}>
                      Furnizare Echipamente IT
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sidebar-banner">
                <img src={process.env.PUBLIC_URL + '/img/widget-banner-bg.jpg'} alt="Banner images" />
                <div className="banner-inner">
                  <h3>
                    Pentru Ofertă<span>Sunați acum.</span>
                    <img
                      className="angle"
                      src={process.env.PUBLIC_URL + "/img/arrow-angle.png"}
                      alt=""
                    />
                  </h3>
                  <a href="tel:+40727999900">+40 727 999 900</a>
                </div>
              </div>
            </div> 
    </>
  )
}

export default ListaServiciiMeniuDreapta