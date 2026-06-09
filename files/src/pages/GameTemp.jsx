import React from 'react';
import { Typography, Col, Row, Image, Button } from 'antd';
import { dTitleText, dMediumText, dLargeText } from '../App';
import { useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;

function GameTemp(props) {
  const navigate = useNavigate();
  return (
    <>
    <Row justify={'center'} gutter={[20, 20]}>
      <Col span={24} align={'middle'}>
        <Title style={dTitleText}>
          {props.title}
        </Title>
      </Col>
    </Row>
    <Row justify={'center'} gutter={[20, 20]}>
      <Col xs={24} md={10} align={'middle'}>
        <Image src={props.image} style={{maxHeight: '20vh', width: '100%', objectFit: 'contain'}} preview={false}/>
      </Col>
      <Col xs={24} md={12} align={'left'}>
        <Text>
          {props.description}
        </Text>
      </Col>
    </Row>
    </>
  );
}

export default GameTemp;
