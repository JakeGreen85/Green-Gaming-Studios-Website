import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import ROTR from './pages/ROTR';
import VRQB from './pages/VRQB';

import React from 'react';
import { Flex, Layout, Typography, Col, Row } from 'antd';
const { Text } = Typography;

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};

export const wTitleText = {
  color: 'white', fontWeight: 'bold', fontSize: 'clamp(30px, 5vw, 60px)', fontFamily: 'VT323'
}

export const wLargeText = {
  color: 'white', fontWeight: 'bold', fontSize: 'clamp(22px, 3.5vw, 40px)', fontFamily: 'VT323'
}

export const wMediumText = {
  color: 'white', fontSize: 'clamp(16px, 2vw, 20px)', fontFamily: 'VT323'
}

export const wSmallText = {
  color: 'white', fontSize: 'clamp(12px, 1.5vw, 14px)', fontFamily: 'VT323'
}

export const dTitleText = {
  color: 'black', fontWeight: 'bold', fontSize: 'clamp(30px, 5vw, 60px)', fontFamily: 'VT323'
}

export const dLargeText = {
  color: 'black', fontWeight: 'bold', fontSize: 'clamp(22px, 3.5vw, 40px)', fontFamily: 'VT323'
}

export const dMediumText = {
  color: 'black', fontSize: 'clamp(16px, 2vw, 20px)', fontFamily: 'VT323'
}

export const dSmallText = {
  color: 'black', fontSize: 'clamp(12px, 1.5vw, 14px)', fontFamily: 'VT323'
}

function App() {
  return (
    <>
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <Header>
          <Navbar/>
        </Header>
      <Layout>
        <Content>
          <div style={{
                          backgroundImage: "url('./background_fantasy.png')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'center 40%',
                          height: '100%',
                          paddingBottom: '50px',
            }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center', marginTop: 'auto' }}>
        <Row style={{ textAlign: 'center' }}>
          <Col span={24}>
            <Text type='secondary'>
              © 2024-2026 Green Gaming Studios. All rights reserved.
            </Text>
        </Col>
        </Row>
      </Footer>
    </Layout>
    </Router>
    </>
  );
}

export default App;