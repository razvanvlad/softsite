import React from 'react';
import { Link } from 'react-router-dom';
import LottieBanner from "../../common/lottieBanner";
import LottieBannerTest from "../../common/lottieBannerTest";
import PartnarArea from './PartnarArea'

function HeroArea() {
    const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <section className="hero-area">
        <div className="hero-wrapper">
          <div className="container">
            <div className="row"  id="hero-container">
            <div className="col-lg-6" id="hero-lottie-banner">
                <LottieBannerTest />
              </div>
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1>SOFT-URI &amp; SITE-URI<span>SoftSite.ro</span></h1>
                  <p>Oferim o gamă completă de servicii IT. Vă putem dezvolta website-ul de prezentare și vă putem promova afacerea. Lăsați-ne să ne ocupăm de digitalizarea afacerii tale, pentru a le oferi clienților tăi o experiență cât mai plăcută în vederea interacțiunii cu brandul tău.</p>
                  <div className="buttons">
                    <div className="cmn-btn">
                      <div className="line-1" />
                      <div className="line-2" />
                      <Link to={`${process.env.PUBLIC_URL}/proiecte`} onClick={scrollTop}>Vezi Portofoliu</Link>
                    </div>
                    <div className="cmn-btn">
                      <div className="line-1" />
                      <div className="line-2" />
                      <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={scrollTop}>Cere o ofertă</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
          </div>
        </div>        
      </section>   
    </>
  )
}

export default HeroArea