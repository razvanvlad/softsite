import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import EchipamenteItContinut from './EchipamenteItContinut'

function EchipamenteIt() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Echipamente IT" pageTitle="Echipamente IT"/>
          <EchipamenteItContinut/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default EchipamenteIt