import React from 'react';
import { Typography, Col, Row, Button, Carousel } from 'antd';
const { Title, Text } = Typography;

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
    {/* <div style={{
      backgroundImage: "url('./frontpage_background.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '200vh',
    }}> */}
    <Row
      style={{ textAlign: 'center' }}
      >
      <Col span={24}>
        <Title>
          Green Gaming Studios
        </Title>
        <Text type="secondary">
          We build immersive games and beautiful websites for modern brands.
        </Text>
      </Col>
    </Row>

    <Row style={{ textAlign: 'center' }}>
      <Col span={24}>
      <Button>
        View Our Solutions
      </Button>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Col>
    </Row>
    </>
  );
}

export default Home;
