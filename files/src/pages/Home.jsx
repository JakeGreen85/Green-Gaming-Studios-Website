import React from 'react';
import { Typography, Col, Row, Button, Carousel, Image } from 'antd';
const { Title, Text } = Typography;
import { wLargeText, wMediumText, wSmallText, dLargeText, dMediumText, wTitleText } from '../App';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function Home() {
  return (
    <>
    <div style={{
      backgroundImage: "url('./chibo pool.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center 75%',
      height: '50vh',
      marginTop: '10px',
      marginBottom: '10px'
    }}>
    <Row
      style={{ textAlign: 'center' }}
      >
      <Col span={24}>
        <Title style={wTitleText}>
          
        </Title>
      </Col>
    </Row>
    </div>

    <Row style={{ textAlign: 'center' }}>
      <Col span={24}>
      <Title style={dLargeText}>
        Our Games
      </Title>
      </Col>
    </Row>
    <Row style={{ textAlign: 'center'}} justify={'center'}>
      <Col span={12} >
        <Carousel arrows={true} autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
          <div>
            <Image src="./chibo image.png" style={{borderRadius: '20%'}} preview={false}/>
              <Row
                style={{ textAlign: 'center' }}
                >
                <Col span={24}>
                  <Title style={dMediumText}>
                    Chibo: Journey of Fate
                  </Title>
                </Col>
              </Row>
          </div>
          <div>
            <Image src="./trinket image.png" preview={false}/>
              <Row
                style={{ textAlign: 'center' }}
                >
                <Col span={24}>
                  <Title style={dMediumText}>
                    Trinket: Hoard of Mischief
                  </Title>
                </Col>
              </Row>
          </div>
        </Carousel>
      </Col>
    </Row>
    </>
  );
}

export default Home;
