import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import AplicatieAndroidIosContinut from './AplicatieAndroidIosContinut'

function AplicatieAndroidIos() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Aplicatie Android sau Ios" pageTitle="Aplicatie Android sau Ios"/>
          <AplicatieAndroidIosContinut/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default AplicatieAndroidIos