import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceCardWrap() {
  return (
    <>
      <div className="services-grid sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className="sec-title">
              <span>Listă Servicii SoftSite</span>
              <h2> De ce să alegi Softsite?</h2>
              <p>
              Dacă îți dorești un site web profesionist care să atragă și să fidelizeze clienții, ai nevoie de un serviciu de web design de calitate. Noi oferim servicii complete de proiectare și dezvoltare de site-uri web, care se potrivesc nevoilor și obiectivelor tale. Indiferent de natura afacerii tale, avem o echipă de experți care poate crea un site care să te ajute să te faci remarcat în mediul online. De la proiectarea și dezvoltarea site-ului până la crearea de conținut și optimizarea pentru motoarele de căutare, noi ne asigurăm că site-ul tău este atractiv, ușor de utilizat și eficient din punct de vedere al afacerii.
              </p>
            </div>
          </div>
          <div className="row g-4">
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={1} image="/img/icons/service-icon-1.png" title="Creare Website" details="Realizăm site-uri de prezentare cu design responsive pe orice dispozitiv. Oferim Web Design pe platforma Wordpress sau Design Custom (HTML, CSS, JS, React.JS)"  alt="creare-website"/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={2} image="/img/icons/service-icon-2.png" title="Dezvoltare Software" details="Dezvoltare Software sau Web App pentru diverse activitatii ale firmei. Putem crea aplicatii desktop, aplicatii mobile si alte tipuri de software personalizat, in functie de nevoile si cerintele fiecarui client." alt="dezvoltare-software"/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={3}  image="/img/icons/service-icon-3.png" title="Magazin Online" details="Dezvoltăm împreună o pagină web dedicată vânzării online. Folosim platformele: WooCommerce, OpenCart, PrestaShop, Shopify sau Magento 2 sau Custom PHP." alt="magazin-online"/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={4} image="/img/icons/service-icon-4.png" title="Marketing și Promovare" details="Ne concentram pe o abordare strategica de marketing, care include analiza pietei, definirea obiectivelor si crearea unui plan de actiune pentru a atinge aceste obiective. Oferim servicii precum optimizare SEO, publicitate online, marketing prin e-mail si social media marketing." alt="marketing-si-promovare"/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={5} image="/img/icons/service-icon-5.png" title="Design Grafic" details="Design grafic de calitate, care ajuta clientii nostri sa-si promoveze afacerile prin intermediul materialelor de marketing de inalta calitate.  Oferim servicii precum design de afise, pliante, brosuri, afise publicitare si multe altele." alt="design-grafic"/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={6} image="/img/icons/service-icon-6.png" title="Găzduire" details="Oferim servicii de gazduire stabile, rapide si sigure, astfel incat clientii nostri sa poata avea un site web care functioneaza optim." alt="gazduire"/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={7} image="/img/icons/service-icon-6.png" title="Mentenanță și suport" details="Oferim servicii de mentenanta periodica, astfel incat sa putem verifica site-urile clientilor nostri pentru orice probleme sau necesitate de actualizare, si le oferim suport tehnic pentru orice probleme intampinate." alt="mentenanta-si-suport"/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={8} image="/img/icons/service-icon-6.png" title="Automatizări RPA" details="Oferim servicii de automatizare RPA (robotic process automation) pentru a ajuta clientii nostri sa eficientizeze procesele lor de afaceri." alt="automatizari-rpa"/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={9} image="/img/icons/service-icon-6.png" title="Aplicație Android și iOS" details="Oferim servicii de creare de aplicatii Android si iOS pentru a ajuta clientii nostri sa-si promoveze afacerile prin intermediul platformelor mobile." alt="aplicatie-android-si-ios"/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={10} image="/img/icons/service-icon-6.png" title="Furnizare Echipamente IT" details="Importăm produse de la distribuitori autorizați de echipamente IT și telefoane mobile." alt="furnizare-echipamente-it"/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCardWrap;
