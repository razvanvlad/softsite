import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import MarketingPromovareContinut from './MarketingPromovareContinut'

function MarketingPromovare() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Marketing si Promovare" pageTitle="Marketing si Promovare"/>
          <MarketingPromovareContinut/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default MarketingPromovare