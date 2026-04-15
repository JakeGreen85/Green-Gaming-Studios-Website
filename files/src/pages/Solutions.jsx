import React from 'react';
import { Typography, Col, Row, Card, Image, Button } from 'antd';
const { Title, Text } = Typography;
import { dLargeText, dTitleText } from '../App';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;



function Solutions() {
  const navigate = useNavigate();

  return (
    <Row
      style={{ textAlign: 'center' }}
    >
      <Col span={24}>
        <Title style={dTitleText}>
            Portfolio
        </Title>
        <Row justify={'center'}>
          <Col span={4} align={'middle'}>
          <Button style={{ height: 400}} type='link' onClick={() => navigate(`/solutions/ROTR`)}>
            <Card
              hoverable
              style={{ height: 400, width: 240}}
              cover={<Image src="./rebels_of_the_realm_logo.png" style={{height: '20vh'}} preview={false}/>}
              >
              <Meta style={{ textWrap: 'wrap'}} title="Rebels of the Realm" description="Co-op RPG" />
            </Card>
          </Button>
          </Col>
          <Col span={4} align={'middle'}>
            <Button style={{ height: 400}} type='link' onClick={() => navigate(`/solutions/VRQB`)}>
            <Card
              hoverable
              style={{ height: 400, width: 240 }}
              cover={<Image src="./qb_sim_logo.png" style={{height: '20vh'}} preview={false}/>}
              >
              <Meta style={{ textWrap: 'wrap'}} title="VR QB Simulator" description="Virtual Reality training tool for quarterback development" />
            </Card>
          </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Solutions;
