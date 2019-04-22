import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/medium-lockup-black.svg';

const DHFLogo = () => (
  <SiteLogoContainer>
    <Link to="/">
      <SiteLogoImg
        src={logo}
        alt="Digital Harbor Foundation name and anchor logo"
      />
    </Link>
  </SiteLogoContainer>
);

export default DHFLogo;

const SiteLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -2px;
  padding-left: 10px;
`;

const SiteLogoImg = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
`;
