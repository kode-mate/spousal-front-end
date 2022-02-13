import React from 'react';
import '../../Stylesheets/HomePage/HeaderComponent.scss';
import '../../Javascript/HomePage/HeaderComponent.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faMale, faCommentDots, faBell, faPhone, faQuestion, faBlog, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,} from 'reactstrap';

function HeaderComponent() {
    return (
      <div>
        <Navbar color='light' light expand="md">
          <NavbarBrand href="/">SPOUSAL</NavbarBrand>
            <Nav className="ml-auto tabs" navbar>
              <div className='selector'></div>
              <NavItem>
                <FontAwesomeIcon icon={ faFemale } /><NavLink className='active'>Bridals</NavLink>
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon={ faMale } /><NavLink>Grooms</NavLink>
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon={ faCommentDots } /><NavLink>Messages</NavLink>
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon={ faBell } /><NavLink>Notifications</NavLink>
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon={ faBlog } /><NavLink>Blogs</NavLink>
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon={ faPhone } /><NavLink>Contact</NavLink>
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon={ faQuestion } /><NavLink>Help</NavLink>
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon={ faRightFromBracket } /><NavLink>Login</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
}

export default HeaderComponent;
