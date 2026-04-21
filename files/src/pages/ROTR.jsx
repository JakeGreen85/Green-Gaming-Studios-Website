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
      description="Rebels of the Realm is a cooperative fantasy action game where players team up to explore dungeons, fight enemies, and complete challenges together. Designed around multiplayer gameplay, the game focuses on teamwork, character abilities, and fast-paced combat in a stylized low-poly world. Players can progress through different encounters, face unique enemies, and work together to overcome increasingly difficult obstacles. The project highlights cooperative mechanics, engaging level design, and a fun, replayable gameplay experience." 
      image="/rebels_of_the_realm_logo.png">

    </GameTemp>
    </>
  );
}

export default ROTR;
