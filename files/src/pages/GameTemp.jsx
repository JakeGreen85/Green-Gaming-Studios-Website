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
      <Col span={10} align={'right'}>
        <Image src={props.image} style={{height: '20vh'}} preview={false}/>
      </Col>
      <Col span={12} align={'left'}>
        <Text>
          {props.description}
        </Text>
      </Col>
    </Row>
    <Row justify={'center'} gutter={[20, 20]}>
      <Col span={24} align={'middle'}>
      <Button type='primary' onClick={() => navigate(`/solutions`)}>
        Back
      </Button>
      </Col>
    </Row>
    </>
  );
}

export default GameTemp;
