import React from 'react';
import Lottie from "lottie-react";
import * as animationData from './lottie/webdesign.json';


const WebDesign = () => <Lottie animationData={animationData} loop={true} />;

export default WebDesign;