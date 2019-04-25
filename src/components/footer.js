import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterWrapper>
    <FooterTagline>
      <FooterRights>© 2019</FooterRights>
      <FooterLinkContainer>
        <FooterLink
          href="https://digitalharbor.org"
          target="_blank"
          rel="nofollow"
        >
          Digital Harbor Foundation.
        </FooterLink>
      </FooterLinkContainer>
      <FooterRights>All rights reserved.</FooterRights>
    </FooterTagline>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  z-index: 1000;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  width: 100%;
  padding: 1rem;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  grid-area: footer;
`;

const FooterLink = styled.a`
  color: #000000;
  font-size: 1rem;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  &:hover {
    color: #0091c9;
    cursor: pointer;
  }
`;

const FooterRights = styled.span`
  font-size: 1rem;
  font-weight: normal;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  margin: 0;
  color: #000000;
`;

const FooterLinkContainer = styled.div`
  display: inline;
  transition: all ease-in 0.3s;
  padding: 0%;
  border-bottom: 1px dotted #000000;
  &:hover {
    border-bottom: 1px dotted #0091c9;
  }
`;

const FooterTagline = styled.span`
  font-size: 1.5rem;
  font-weight: normal;
  color: #000000;
  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span:first-of-type {
      padding-bottom: 0.5rem;
    }

    span:last-of-type {
      padding-top: 0.5rem;
    }
  }
`;
