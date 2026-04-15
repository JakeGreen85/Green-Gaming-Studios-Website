import React from 'react';
import { Typography, Col, Row, Image } from 'antd';
import { dTitleText, dMediumText, dLargeText } from '../App';
import GameTemp from './GameTemp';
const { Title, Text } = Typography;

function ROTR(props) {
  return (
    <>
    <GameTemp 
      title="Rebels of the Realm" 
      description="Grab your friends and dive into chaotic dungeon raids in this lighthearted co-op fantasy RPG - where teamwork, laughter, and chaos rule the realm." 
      image="/rebels_of_the_realm_logo.png">

    </GameTemp>
    </>
  );
}

export default ROTR;
