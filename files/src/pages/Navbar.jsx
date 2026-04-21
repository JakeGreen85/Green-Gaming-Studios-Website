import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Typography, Col, Row, Image, Button, Space } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { wLargeText, wMediumText, wSmallText, wTitleText } from '../App';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log('Current path:', location.pathname);
        setCurrentKey(pathToKey[location.pathname] || 'home');
    }, [location]);

    const pathToKey = {
        '/': 'home',
        '/solutions': 'solutions',
        '/solutions/ROTR': 'solutions',
        '/solutions/VRQB': 'solutions',
        '/about': 'about',
        '/contact': 'contact',
    };

    const [currentKey, setCurrentKey] = useState(pathToKey[location.pathname] || 'home');

  const handleClick = (e) => {
    navigate(`/${e.key === 'home' ? '' : e.key}`); // go to '/', '/services', etc.
  };
  return (
    <Row wrap={false}>
        <Col flex='75px'>
          <Image src="./company_logo_no_text.png" style={{borderRadius: '20%', height: '5vh'}} preview={false}/>
        </Col>
        <Col flex='175px'>
          <span style={wMediumText}>
            Green Gaming Studios
          </span>
        </Col>
        <Col flex='auto'>
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[currentKey]}
            onClick={handleClick}
            style={{ justifyContent: 'flex-end' }}
            >
            <Menu.Item style={wMediumText} key="home" icon={<HomeOutlined />}>Home</Menu.Item>
            <Menu.Item style={wMediumText} key="solutions" icon={<AppstoreOutlined />}>Portfolio</Menu.Item>
            <Menu.Item style={wMediumText} key="about" icon={<InfoCircleOutlined />}>About</Menu.Item>
            <Menu.Item style={wMediumText} key="contact" icon={<PhoneOutlined />}>Contact</Menu.Item>
            </Menu>
        </Col>
    </Row>
  );
}

export default Navbar;
