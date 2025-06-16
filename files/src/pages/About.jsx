import React from 'react';
import { Typography, Col, Row } from 'antd';
const { Title, Text } = Typography;

function About() {
  return (
    <Row
      style={{ textAlign: 'center' }}
    >
      <Col span={24}>
        <Title>
            About Us
        </Title>
        <Text type="secondary">
          This is something about us
        </Text>
      </Col>
    </Row>
  );
}

export default About;
