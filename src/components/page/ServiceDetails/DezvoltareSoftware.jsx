import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import DezvoltareSoftwareContinut from './DezvoltareSoftwareContinut'

function DezvoltareSoftware() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Dezvoltare Software" pageTitle="Dezvoltare Software"/>
          <DezvoltareSoftwareContinut/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default DezvoltareSoftware