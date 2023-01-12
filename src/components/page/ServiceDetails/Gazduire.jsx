import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import GazduireContinut from './GazduireContinut'

function Gazduire() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Gazduire" pageTitle="Gazduire"/>
          <GazduireContinut/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default Gazduire