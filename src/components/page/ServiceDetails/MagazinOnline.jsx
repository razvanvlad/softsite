import React from 'react'
import AnimateLine from '../../common/AnimateLine'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import MagazinOnlineContinut from './MagazinOnlineContinut'

function MagazinOnline() {
  return (
    <>
        <div className="creasoft-wrap">
          <AnimateLine/>
          <Breadcrumb pageName="Magazin Online" pageTitle="Magazin Online"/>
          <MagazinOnlineContinut/>
          <SubscribArea/>
        </div>
    </>
  )
}

export default MagazinOnline