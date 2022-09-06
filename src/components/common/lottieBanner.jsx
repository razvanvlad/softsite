import React from 'react';
import Lottie from "lottie-react";
import * as animationData from './lottie/softsite-banner.json';


const LottieBanner = () => <Lottie animationData={animationData} loop={true} />;

export default LottieBanner;