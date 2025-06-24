import React from 'react';
import { Typography, Col, Row, Card, Image } from 'antd';
const { Title, Text } = Typography;
import { dLargeText, dTitleText } from '../App';

const { Meta } = Card;

function Solutions() {
  return (
    <Row
      style={{ textAlign: 'center' }}
    >
      <Col span={24}>
        <Title style={dTitleText}>
            Portfolio
        </Title>
        <Row style={{ textAlign: 'center'}} justify={'center'}>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<Image src="./chibo image.png" preview={false}/>}
            >
              <Meta title="Chibo: Journey of Fate" description="Go on the journey of Chibo and explore the world of Raad" />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<Image src="./trinket image.png" preview={false}/>}
            >
              <Meta title="Trinket: Hoard of Mischief" description="Explore the neighborhood through the eyes of a mischievous dragon" />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Solutions;
