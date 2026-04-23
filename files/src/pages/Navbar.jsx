import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Menu, Grid, Col, Row, Image, Button, Drawer } from 'antd';
import { MenuOutlined, HomeOutlined, AppstoreOutlined, InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { wMediumText } from '../App';

const { useBreakpoint } = Grid;

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const screens = useBreakpoint();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        navigate(`/${e.key === 'home' ? '' : e.key}`);
        setMobileMenuOpen(false);
    };

    const menuItems = [
        { key: 'home', icon: <HomeOutlined />, label: 'Home' },
        { key: 'solutions', icon: <AppstoreOutlined />, label: 'Portfolio' },
        { key: 'about', icon: <InfoCircleOutlined />, label: 'About' },
        { key: 'contact', icon: <PhoneOutlined />, label: 'Contact' },
    ];

    if (screens.md === false) {
        return (
            <Row wrap={false} align="middle" style={{ width: '100%' }}>
                <Col flex="75px">
                    <Image src="./company_logo.png" style={{ borderRadius: '20%', height: '5vh' }} preview={false} />
                </Col>
                <Col align="right" flex="auto">
                    <Button
                        type="text"
                        icon={<MenuOutlined style={{ color: 'white', fontSize: '20px' }} />}
                        onClick={() => setMobileMenuOpen(true)}
                    />
                </Col>
                <Drawer
                    placement="right"
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                    width={220}
                    styles={{ body: { padding: 0, backgroundColor: '#001529' } }}
                >
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={[currentKey]}
                        onClick={handleClick}
                        items={menuItems.map(item => ({ ...item, style: wMediumText }))}
                        style={{ height: '100%' }}
                    />
                </Drawer>
            </Row>
        );
    }

    return (
        <Row wrap={false} height="100%">
            <Col flex='75px'>
                <Image src="./company_logo_no_text.png" style={{ borderRadius: '20%', height: '5vh' }} preview={false} />
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
                    selectedKeys={[currentKey]}
                    onClick={handleClick}
                    style={{ justifyContent: 'flex-end' }}
                    items={menuItems.map(item => ({ ...item, style: wMediumText }))}
                />
            </Col>
        </Row>
    );
}

export default Navbar;
