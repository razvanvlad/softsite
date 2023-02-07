import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import AutomatizariRpaContinut from './AutomatizariRpaContinut'

function AutomatizariRpa() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Automatizari RPA" pageTitle="Automatizari RPA"/>
          <AutomatizariRpaContinut/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default AutomatizariRpa