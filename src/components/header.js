import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SiteNavbar from './site-navbar';
import DHFLogo from './dhf-logo';

const Header = ({ siteTitle }) => (
  <Masthead>
    <DHFLogo />
    <SiteTitle>{siteTitle}</SiteTitle>
    <SiteNavbar />
  </Masthead>
);
export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const Masthead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background: #ffffff; */
  background: #0091c9;
  /* border-bottom: 2px solid rgba(0, 0, 0, 0.1); */
  margin-bottom: 2rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  grid-area: header;

  @media only screen and (min-width: 1000px) {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const SiteTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 2.25rem;
  /* color: #e5f8ff; */
  /* color: #000000; */
  color: #ffffff;
  padding: 2rem 0 2rem 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;

  @media only screen and (max-width: 1000px) {
    font-size: 1.5rem;
    margin-left: 50px;
  }
`;
