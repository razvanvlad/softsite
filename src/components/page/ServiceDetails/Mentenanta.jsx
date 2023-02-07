import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import MentenantaContinut from './MentenantaContinut'

function Mentenanta() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Mentenanta" pageTitle="Mentenanta"/>
          <MentenantaContinut/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default Mentenanta