import React from 'react';
import '../../Stylesheets/HomePage/FooterComponent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import {
  Container,
  Row,
  Col,
  Button,
  List,
  InputGroup,
  Input,
  InputGroupAddon
} from 'reactstrap';

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row className='main-row'>
          <Col
             md={{
              offset: 4,
              size: 8
            }}
            sm='12'  
          >
            <FontAwesomeIcon icon={faFacebook} size='3x' />
            <FontAwesomeIcon icon={faLinkedinIn} size='3x'/>
            <FontAwesomeIcon icon={faYoutube} size='3x' />
            <FontAwesomeIcon icon={faTwitter} size='3x' />
            <FontAwesomeIcon icon={faInstagram} size='3x'/>
          </Col>
        </Row>
        <Row className='main-row'>
          <Col sm='5'>
            <h3>SPOUSAL</h3>
            <p>Finding your perfect match has never been easier. spousal.com is a free merriage site where you can register for free, find your soulmate and get married.</p>
          </Col>
          <Col sm='2'>
            <h3>Links</h3>
            <List type='unstyled'>
                <li><a>BRIDALS</a></li>
                <li><a>GROOMS</a></li>
                <li><a>BLOGS</a></li>
                <li><a>CONTACT</a></li>
                <li><a>LOGOUT</a></li>
            </List>
          </Col>
          <Col sm='5'>
            <h3>Subscribe to our news letter:</h3>
            <Input placeholder='Enter your email...' />
            <br/>
            <Button color='primary'>Subscribe</Button>
          </Col>
        </Row>
        <Row className='main-row'>
          <Col
             md={{
              offset: 3,
              size: 6
            }}
            sm="12"  
          >
            <Row>
              <Col>
                <h3>Register for free</h3>
              </Col>
              <Col>
                <Button color="primary">Sign Up</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col
             md={{
              offset: 4,
              size: 8
            }}
            sm="12"  
          >
            @ 2022 Copyright: Spousal.com
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent;
