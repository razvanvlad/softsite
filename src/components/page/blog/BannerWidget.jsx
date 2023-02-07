import React from "react";

function BannerWidget() {
  return (
    <>
      <div className="sidebar-banner">
        <img src={process.env.PUBLIC_URL + "/img/widget-banner-bg.jpg"} alt="bannerImg" />
        <div className="banner-inner">
          <h3>
            Pentru Ofertă<span>Sunați acum.</span>
            <img className="angle" src={process.env.PUBLIC_URL + "/img/arrow-angle.png"} alt="bannerImg" />
          </h3>
          <a href="tel:+40727999900">+40 727 999 900</a>
        </div>
      </div>
    </>
  );
}

export default BannerWidget;
