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
              <Meta title="Rebels of the Realm" description="Co-op RPG" />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Solutions;
