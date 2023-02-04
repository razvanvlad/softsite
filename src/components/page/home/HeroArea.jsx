import React from 'react';
import { Link } from 'react-router-dom';
import LottieBanner from "../../common/lottieBanner";
import LottieHeaderAction from '../../common/LottieHeaderAction';

function HeroArea() {
    const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <section className="hero-area">
        <div className="hero-wrapper">
          <div className="container">
            <div className="row"  id="hero-container">
            <div className="col-lg-6" id="hero-lottie-banner">
                <LottieBanner />
                
              </div>
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1>SOFTSITE, <br></br>SOLUȚIA TA PENTRU<span>DIGITALIZARE.</span></h1>
                  <p>Oferim soluții complete de digitalizare pentru afacerile castigatoare ale Programului StartUp Nation și Femeia Antreprenor. Dacă doriți să transformați afacerea dvs. prin intermediul tehnologiei moderne, suntem aici să vă ajutăm. De la crearea unui site web atractiv și ușor de utilizat la dezvoltarea unui software personalizat, avem o gamă completă de servicii IT la dispoziția dvs.</p>

                  <div className="buttons">
                  <div className="cmn-btn-layout-two">
                      <div className="line-1" />
                      <div className="line-2" />
                     
                      <Link to={`${process.env.PUBLIC_URL}/pachet-digital-startup-nation-2022`} onClick={scrollTop}> 
                        <div className="action-container" id="lottie-action-container">
                          <div id="lottie-action">
                            <LottieHeaderAction />
                          </div>
                          <div id="lottie-action-text">
                            Ofertă Pachetul Digital
                            </div>                           
                        </div>     
                      </Link>
                    </div>
                  </div>
                 

                  
                  {/* <div className="buttons">
                    <div className="cmn-btn">
                      <div className="line-1" />
                      <div className="line-2" />
                     
                      <Link to={`${process.env.PUBLIC_URL}/proiecte`} onClick={scrollTop}> 
                        <div className="action-container" id="lottie-action-container">
                          <div id="lottie-action">
                          </div>
                          <div id="lottie-action-text">
                            Vezi Portofoliu
                          </div>                           
                        </div>     
                      </Link>
                    </div>
                    <div className="cmn-btn">
                      <div className="line-1" />
                      <div className="line-2" />
                      <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={scrollTop}>Cerere ofertă</Link>
                    </div>
                  </div> */}
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