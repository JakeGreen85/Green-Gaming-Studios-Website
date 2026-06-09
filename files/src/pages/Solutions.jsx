import React, { useEffect, useState } from 'react';
import { Typography, Col, Row, Card, Image, Button, Drawer } from 'antd';
const { Title, Text } = Typography;
import { dLargeText, dTitleText } from '../App';
import { useNavigate } from 'react-router-dom';
import VRQB from './VRQB';
import ROTR from './ROTR';

const { Meta } = Card;



function Solutions() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState(<VRQB></VRQB>);

  const showDrawer = (content) => {
    setDrawerContent(content);
    setOpen(true);
  }

  const closeDrawer = () => {
    setOpen(false);
  }

  return (
    <>
    <Row
      style={{ textAlign: 'center' }}
      >
      <Col span={24}>
        <Title style={dTitleText}>
            Portfolio
        </Title>
        <Row justify={'center'}>
          <Col xs={24} md={12} align={'middle'}>
          <Button style={{ height: '100%'}} type='link' onClick={() => showDrawer(<ROTR></ROTR>)}>
            <Card
              hoverable
              cover={<Image src="./rebels_of_the_realm_logo.png" style={{width: '100%', height: '200px', objectFit: 'contain'}} preview={false}/>}
              >
              <Meta style={{ textWrap: 'wrap'}} title="Rebels of the Realm" description="Co-op RPG" />
            </Card>
          </Button>
          </Col>
          <Col xs={24} md={12} align={'middle'}>
            <Button style={{ height: '100%'}} type='link' onClick={() => showDrawer(<VRQB></VRQB>)}>
            <Card
              hoverable
              cover={<Image src="./qb_sim_logo.png" style={{width: '100%', height: '200px', objectFit: 'contain'}} preview={false}/>}
              >
              <Meta style={{ textWrap: 'wrap'}} title="VR QB Simulator" description="VR training tool" />
            </Card>
          </Button>
          </Col>
        </Row>
      </Col>
    </Row>
    <Drawer size={'50%'} placement='bottom' onClose={closeDrawer} open={open}>
      {drawerContent}
    </Drawer>
    </>
  );
}

export default Solutions;
