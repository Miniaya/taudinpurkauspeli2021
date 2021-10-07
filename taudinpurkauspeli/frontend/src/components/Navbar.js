import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link,
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavLink,
  NavDropdown,
} from 'react-bootstrap';

// Import translations
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/config';

// Import components
import Frontpage from './Frontpage';
import Sidebar from './Sidebar';
import HowToPlay from './HowToPlay';
import Profile from './Profile';

const Navigationbar = ({ user, admin }) => {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/">{t('nameOfTheGame')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title={t('selectLanguage')}>
              <NavDropdown.Item onClick={() => changeLanguage('fi')} eventKey="fi">{t('language_finnish')}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage('en')} eventKey="en">{t('language_english')}</NavDropdown.Item>
            </NavDropdown>
            { user && admin && (
            <Nav.Item>
              <NavLink as={Link} to="/users">{t('userInformation')}</NavLink>
            </Nav.Item>
            )}
            { user && admin && (
            <Nav.Item>
              <NavLink as={Link} to="/files">{t('fileBank')}</NavLink>
            </Nav.Item>
            )}
            { user && !admin && (
            <Nav.Item>
              <NavLink as={Link} to="/howtoplay">{t('howToPlay')}</NavLink>
            </Nav.Item>
            )}
            { user && (
            <Nav.Item>
              <NavLink as={Link} to="/profile">{t('userProfile')}</NavLink>
            </Nav.Item>
            )}
            <Nav.Item>
              { user
                ? <NavLink as={Link} to="/logout">{t('logOut')}</NavLink>
                : <NavLink as={Link} to="/login">{t('logIn')}</NavLink> }
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Sidebar />

      <Switch>
        <Route path="/howtoplay">
          <HowToPlay />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Frontpage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigationbar;
