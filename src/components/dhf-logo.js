import React from 'react';
import styled from 'styled-components';
import logo from '../images/medium-lockup-black.svg';

const DHFLogo = () => (
  <SiteLogoContainer>
    <SiteLogoImg src={logo} />
  </SiteLogoContainer>
);

export default DHFLogo;

const SiteLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -2px;
  padding: 0px;
`;

const SiteLogoImg = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
`;
