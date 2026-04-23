import React from 'react';
import { Typography, Col, Row } from 'antd';
import { dTitleText, dMediumText, dLargeText } from '../App';
const { Title, Text } = Typography;

function Contact() {
  return (
    <>
    <Row
      style={{ textAlign: 'center' }}
      >
      <Col span={24}>
        <Title style={dTitleText}>
            Contact
        </Title>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}}justify={'center'}>
      <Col xs={24} md={8}>
        <Text style={dMediumText}>
          Whether you're looking to launch a new website, develop a game, or just have a great idea you want to explore — I'd love to hear from you.
        </Text>
      </Col>
    </Row>
    {/* <Row style={{textAlign: 'center'}}justify={'center'}>
      <Col xs={24} md={8}>
        <Text style={dLargeText}>
          Email:
        </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}}justify={'center'}>
      <Col xs={24} md={8}>
        <Text style={dMediumText}>
          support@greengamingstudios.com
        </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}}justify={'center'}>
      <Col xs={24} md={8}>
        <Text style={dLargeText}>
          Phone:
        </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}}justify={'center'}>
      <Col xs={24} md={8}>
        <Text style={dMediumText}>
          +45 31 66 69 63
        </Text>
      </Col>
    </Row> */}
    <Row style={{textAlign: 'center'}}justify={'center'}>
      <Col xs={24} md={8}>
        <Text style={dLargeText}>
          Social Media:
        </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}}justify={'center'}>
      <Col xs={24} md={8}>
        <Text style={dMediumText}>
          <a href="https://www.instagram.com/greengamingstudios/">
              Instagram
          </a>
        </Text>
      </Col>
    </Row>
    </>
  );
}

export default Contact;
