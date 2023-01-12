import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import DesignGraficContinut from './DesignGraficContinut'

function DesignGrafic() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Design Grafic" pageTitle="Design Grafic"/>
          <DesignGraficContinut/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default DesignGrafic