import React, { useEffect, useRef }from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribAreaB from "../../common/SubscribAreaB";
import TeamWrap2 from "./TeamWrap2";
import ServiceAreaCopy from '../../page/home/ServiceAreaCopy';

function Team() {

  const container = useRef(null)


  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageTitle="Meet Our Team" pageName="team" />
        <div className="container" ref={container}>lottiex</div>
        <TeamWrap2 />
        <SubscribAreaB />
        <ServiceAreaCopy />
      </div>
    </>
  );
}

export default Team;
