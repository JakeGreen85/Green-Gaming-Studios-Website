import React from 'react';
import { Typography, Col, Row, Button, Carousel, Image, Timeline } from 'antd';
const { Title, Text } = Typography;
import { wLargeText, wMediumText, wSmallText, dLargeText, dMediumText, wTitleText, dTitleText, dSmallText } from '../App';

function Home() {
  return (
    <>
    <Row>
      <Col span={24} align={"middle"}>
        <Title style={dTitleText}>
          Welcome to the universe of Green Gaming Studios
        </Title>
      </Col>
    </Row>

    <Row>
      <Col span={24} align={"middle"}>
      <Title style={dLargeText}>
        Projects
      </Title>
      </Col>
    </Row>
    <Row justify={'center'}>
      <Col span={24} align={"middle"}>
        <Carousel dots={false} arrows={false} autoplay={{ dotDuration: true }} speed={1000} autoplaySpeed={5000}>
          <Row>
            <Image src="./rebels_of_the_realm_logo.png" style={{borderRadius: '20%', height: '20vh', width: '20vh'}} preview={false}/>
                <Col span={24}>
                  <Title style={dMediumText}>
                    Rebels of the Realm
                  </Title>
                </Col>
              </Row>
          <Row>
            <Image src="./qb_sim_logo.png" style={{borderRadius: '20%', height: '20vh', width: '20vh'}} preview={false}/>
                <Col span={24}>
                  <Title style={dMediumText}>
                    VR QB Simulator
                  </Title>
                </Col>
          </Row>
        </Carousel>
      </Col>
    </Row>
    <Row justify={'center'}>
      <Col span={12} align={"middle"}>
      <Title style={dLargeText}>
        History
      </Title>
      </Col>
    </Row>
    <Row justify={'center'}>
      <Col span={20} align={"middle"}>
        <Timeline style={dMediumText} items={[
          {
            title: "April 2024",
            content: "Green Gaming Studios founded"
          },
          {
            title: "May 2024",
            content: "Rebels of the Realm development started"
          },
          {
            title: "December 2025",
            content: "Rebels of the Realm alpha testing started"
          },
          {
            title: "January 2026",
            content: "VR QB Sim development started"
          },
          {
            title: "April 2026",
            content: "VR QB Sim alpha testing started"
          },
          {
            title: "Spring 2026",
            content: "Rebels of the Realm demo launch planned"
          },
          {
            title: "Summer 2026",
            content: "Rebels of the Realm early access launch planned"
          },
        ]} orientation="horizontal" />
      </Col>
    </Row>
    <Row justify={'center'} style={{marginTop: '5vh'}}>
      <Col span={20} align={"middle"}>
      <Image src="./company_logo_black_small.png"  preview={false}/>
      </Col>
    </Row>
    </>
  );
}

export default Home;
