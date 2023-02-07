import React from 'react';
import Lottie from "lottie-react";
import * as animationData from './lottie/magazin-online.json';


const MagazinOnline = () => <Lottie animationData={animationData} loop={true} />;

export default MagazinOnline;