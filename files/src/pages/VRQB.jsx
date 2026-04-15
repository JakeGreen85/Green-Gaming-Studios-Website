import React from 'react';
import { Typography, Col, Row, Image } from 'antd';
import { dTitleText, dMediumText, dLargeText } from '../App';
import GameTemp from './GameTemp';
const { Title, Text } = Typography;

function VRQB(props) {
  return (
    <>
    <GameTemp 
      title="VR QB Simulator" 
      description="Virtual Reality training tool for quarterback development, designed to enhance decision-making, accuracy, and overall performance on the field." 
      image="/qb_sim_logo.png">

    </GameTemp>
    </>
  );
}

export default VRQB;
