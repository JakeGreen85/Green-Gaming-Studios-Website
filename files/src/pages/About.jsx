import React from 'react';
import { Typography, Col, Row } from 'antd';
import { dLargeText, dMediumText, dSmallText, dTitleText, wLargeText } from '../App';
const { Title, Text } = Typography;

function About() {
  return (
    <>
    <Row
      style={{ textAlign: 'center' }}
      >
      <Col span={24}>
        <Title style={dTitleText}>
            About Us
        </Title>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}}justify={'center'}>
      <Col span={12}>
        <Text style={dMediumText}>
          At Green Gaming Studios, we believe digital experiences should be as beautiful as they are bold.

          Founded by a small team of creators with a shared passion for both game design and web technology, we specialize in crafting engaging, high-quality content that entertains, informs, and inspires.

          Whether it's building immersive indie games or designing sleek, modern websites for businesses, our mission is simple:
        </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}}justify={'center'}>
      <Col span={8}>
      <Text style={dLargeText}>
        Make things that people remember.
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}}justify={'center'}>
      <Col span={8}>
      <Text style={dTitleText}>
        What We Do
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col span={8}>
      <Text style={dLargeText}>
        Game Development
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col span={8}>
      <Text style={dMediumText}>
        We design and develop games that are fun, polished, and creatively driven. From retro-style arcade games to narrative-driven adventures, our goal is to create experiences that resonate with players.
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col span={8}>
      <Text style={dLargeText}>
        Web Design & Development
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col span={8}>
      <Text style={dMediumText}>
        We also help small businesses and creators level up their online presence with custom websites that are fast, responsive, and tailored to their brand. No templates. No fluff. Just results.
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col span={8}>
      <Text style={dLargeText}>
        Let's Build Something Cool!
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col span={8}>
      <Text style={dMediumText}>
        Whether you're looking to launch a game, build your first website, or just brainstorm ideas, we're here to help.
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col span={8}>
      <Text style={dLargeText}>
        Contact us to get started.
      </Text>
      </Col>
    </Row>
    </>
  );
}

export default About;
