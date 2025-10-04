import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Typography, Col, Row, Image, Button } from 'antd';
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

    const pathToKey = {
        '/': 'home',
        '/solutions': 'solutions',
        '/about': 'about',
        '/contact': 'contact',
    };

    const currentKey = pathToKey[location.pathname] || 'home';

  const handleClick = (e) => {
    navigate(`/${e.key === 'home' ? '' : e.key}`); // go to '/', '/services', etc.
  };
  return (
    <Row>
        <Col span={24}>
          <span style={wMediumText}>
            Green Gaming Studios
          </span>
        </Col>
        <Col span={12}>
            {/* <Menu
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
            </Menu> */}
        </Col>
    </Row>
  );
}

export default Navbar;
