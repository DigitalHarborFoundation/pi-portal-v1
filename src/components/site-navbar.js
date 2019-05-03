import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SiteNavbar = () => (
  <SiteNavContainer>
    <SiteNavList>
      <SiteNavEntry>
        <SiteNavLink to="/about">About</SiteNavLink>
      </SiteNavEntry>
    </SiteNavList>
  </SiteNavContainer>
);

export default SiteNavbar;

const SiteNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
`;

const SiteNavList = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
`;

const SiteNavEntry = styled.li`
  list-style-type: none;
  display: inline;
  padding: 0 2rem;
`;

const SiteNavLink = styled(Link)`
  list-style-type: none;
  padding-bottom: 5px;
  margin-bottom: 0px;
  margin-left: 0px;
  /* color: #63686b; */
  color: #ffffff;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    border-bottom: none;
  }
  @media only screen and (max-width: 1000px) {
    padding-bottom: 0px;
  }
`;
