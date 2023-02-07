import React from 'react';
import Lottie from "lottie-react";
import * as animationData from './lottie/header-circle-action-green.json';

const width_proportion = '75%';
const height_proportion = '75%';

const style = {
    height: height_proportion,
    width: width_proportion,
    display: 'block',
    margin: 'auto',
}

const LottieHeaderAction = () => <Lottie animationData={animationData} loop={true} style={style} />;

export default LottieHeaderAction;