import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Header = ({ siteTitle }) => (
  <LogoWrapper>
    <DHFTitle>Digital Harbor Foundation</DHFTitle>
  </LogoWrapper>
);
export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background: rgba(45, 42, 42, 0.8); */
  background: rgba(69, 80, 84);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  @media only screen and (max-width: 1000px) {
  }
`;

const DHFTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 300;
  color: #e5f8ff;
  @media only screen and (max-width: 1000px) {
    padding: 0 1rem;
  }
`;
