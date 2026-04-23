import React from 'react';
import { Typography, Col, Row, Image } from 'antd';
import { dLargeText, dMediumText, dSmallText, dTitleText, wLargeText } from '../App';
const { Title, Text } = Typography;

function About() {
  return (
    <>
    <Row justify={'center'}>
      <Image src="./company_logo_black.png" style={{borderRadius: '20%', height: '20vh', width: '20vh'}} preview={false}/>
    </Row>
    <Row
      style={{ textAlign: 'center' }}
      >
      <Col span={24}>
        <Title style={dTitleText}>
            What Is Green Gaming Studios?
        </Title>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}}justify={'center'}>
      <Col xs={24} md={12}>
        <Text style={dMediumText}>
          Green Gaming Studios is founded by a single developer with passion for both game design and web technology, I specialize in crafting engaging, high-quality content that entertains, informs, and inspires.

          Whether it's building immersive indie games or designing sleek, modern websites for businesses, my mission is simple:
        </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}}justify={'center'}>
      <Col xs={24} md={8}>
      <Text style={dLargeText}>
        Make things that people remember.
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col xs={24} md={8}>
      <Text style={dLargeText}>
        Game Development
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col xs={24} md={8}>
      <Text style={dMediumText}>
        I design and develop games that are fun, polished, and creatively driven. From retro-style arcade games to narrative-driven adventures, my goal is to create experiences that resonate with players.
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col xs={24} md={8}>
      <Text style={dLargeText}>
        Web Design & Development
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col xs={24} md={8}>
      <Text style={dMediumText}>
        I also help small businesses and creators level up their online presence with custom websites that are fast, responsive, and tailored to their brand. No templates. No fluff. Just results.
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col xs={24} md={8}>
      <Text style={dLargeText}>
        Let's Build Something Cool!
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col xs={24} md={8}>
      <Text style={dMediumText}>
        Whether you're looking to launch a game, build your first website, or just brainstorm ideas, I'm here to help.
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col xs={24} md={8}>
      <Text style={dLargeText}>
        Reach out to get started.
      </Text>
      </Col>
    </Row>
    </>
  );
}

export default About;
