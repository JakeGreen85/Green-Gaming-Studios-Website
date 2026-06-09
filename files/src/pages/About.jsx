import React from 'react';
import { Typography, Col, Row, Image } from 'antd';
import { dLargeText, dMediumText, dSmallText, dTitleText, wLargeText } from '../App';
const { Title, Text } = Typography;

function About() {
  return (
    <>
    <Row justify={'center'}>
      <Image src="./company_logo_black.png" style={{borderRadius: '20%', height: '20vh', width: '20vh', objectFit: 'contain'}} preview={false}/>
    </Row>
    <Row style={{ textAlign: 'center' }}>
      <Col span={24}>
        <Title style={{...dTitleText, whiteSpace: 'nowrap'}}>
            What Is Green Gaming Studios?
        </Title>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col xs={24} md={12}>
        <Text style={dMediumText}>
          Green Gaming Studios is an indie game development studio built on a simple belief: small studios can create experiences that last. Founded at the intersection of computer science and interactive design, the studio focuses on games that prioritize depth, replayability, and the kind of moments that stay with you long after the screen goes dark.
        </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col xs={24} md={12}>
        <Text style={dMediumText}>
          Every game starts with a question: what makes this worth playing twice? That drives every design decision, from the feel of core mechanics to the way progression rewards genuine engagement. The goal is always craft over quantity, and intention over trend.
        </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col xs={24} md={12}>
        <Text style={dMediumText}>
          Green Gaming Studios was built out of a genuine love for games and the belief that you do not need a large team to make something meaningful. It started as a one-person operation, and that constraint has always been a feature, not a limitation. It keeps the work focused, personal, and honest.
        </Text>
      </Col>
    </Row>
    {/* <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col span={24}>
      <Text style={{...dLargeText, whiteSpace: 'nowrap'}}>
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
      <Col span={24}>
      <Text style={{...dLargeText, whiteSpace: 'nowrap'}}>
        Web Design & Development
      </Text>
      </Col>
    </Row>
    <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col xs={24} md={8}>
      <Text style={dMediumText}>
        I also help businesses level up their online presence with custom websites that are fast, responsive, and tailored to their brand.
      </Text>
      </Col>
    </Row> */}
    {/* <Row style={{textAlign: 'center'}} justify={'center'}>
      <Col span={24}>
      <Text style={{...dLargeText, whiteSpace: 'nowrap'}}>
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
      <Col span={24}>
      <Text style={{...dLargeText, whiteSpace: 'nowrap'}}>
        Reach out to get started.
      </Text>
      </Col>
    </Row> */}
    </>
  );
}

export default About;
