import React from 'react';
import { Typography, Col, Row } from 'antd';
const { Title, Text } = Typography;

function Solutions() {
  return (
    <Row
      style={{ textAlign: 'center' }}
    >
      <Col span={24}>
        <Title>
            Solutions
        </Title>
        <Text type="secondary">
          Creating Beautiful Digital Solutions
        </Text>
      </Col>
    </Row>
  );
}

export default Solutions;
