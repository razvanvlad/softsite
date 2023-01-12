import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import CreareWebsiteContinut from './CreareWebsiteContinut'

function CreareWebsite() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Service Details" pageTitle="Service Details"/>
          <CreareWebsiteContinut/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default CreareWebsite