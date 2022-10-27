import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import SubscribArea from '../../common/SubscribArea'
import ProjectWrap from '../project/ProjectWrap'
import PriceCardWrap from '../service/PriceCardWrap'
import TeamWrap from '../team/TeamWrap'
import AboutArea from './AboutArea'
import FeaturesArea from './FeaturesArea'
import HeroArea from './HeroArea'
import LatesPost from './LatesPost'
import PartnarArea from './PartnarArea'
import ServiceAreaCopy from './ServiceAreaCopy'
import Testimonial from './Testimonial'

function HomePageOne() {
  return (
    <>
        <div className="creasoft-wrap">
            <AnimateLine/>
            <HeroArea/>
            {/* <PartnarArea/> */}
            <ServiceAreaCopy/>
            <AboutArea image="/img/softsite-logo/logo-black-svg-softsite-left-corner.svg"/>
            {/* <FeaturesArea/> */}
            {/* <ProjectWrap/> */}
            
            {/* <PriceCardWrap/> */}
            {/* <Testimonial/> */}
            {/* <TeamWrap/> */}
            {/* <LatesPost/> */}
            {/* <SubscribArea/> */}
        </div>
    </>
  )
}

export default HomePageOne