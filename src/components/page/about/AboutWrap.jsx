import React from "react";
import AnimateLine from "../../common/AnimateLine";
import AboutArea from "../home/AboutArea";
import FeaturesArea from "../home/FeaturesArea";
import Testimonial from "../home/Testimonial";
import TeamWrap from "../team/TeamWrap";
import HistoryArea from "./HistoryArea";
import WhyChooseUs from "./WhyChooseUs";

function AboutWrap() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <WhyChooseUs />
        <AboutArea image="/img/softsite-logo/logo-black-svg-softsite-left-corner.svg"/>
        <FeaturesArea/>
        <HistoryArea/>
        <Testimonial/>
        <TeamWrap/>
      </div>
    </>
  );
}

export default AboutWrap;
