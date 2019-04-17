import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

const Header = ({ siteTitle }) => (
  <Masthead>
    <SiteTitle>{siteTitle}</SiteTitle>
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
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background: rgba(69, 80, 84);
`;
const SiteTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 2.25rem;
  color: #e5f8ff;
  padding: 2rem 0 2rem 0;
  margin: 0px;

  @media only screen and (max-width: 1000px) {
    font-size: 1.5rem;
    margin-left: 50px;
  }
`;
