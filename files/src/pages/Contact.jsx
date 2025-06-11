import React from 'react';
import { Typography, Col, Row } from 'antd';
const { Title, Text } = Typography;

function Contact() {
  return (
    <Row
      style={{ textAlign: 'center' }}
    >
      <Col span={24}>
        <Title>
            Contact
        </Title>
        <Text type="secondary">
          Call anytime!
        </Text>
      </Col>
    </Row>
  );
}

export default Contact;
