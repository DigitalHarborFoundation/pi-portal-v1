import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SiteNavbar = () => (
  <SiteNavContainer>
    <SiteNavList>
      <SiteNavEntry>
        <SiteNavLink to="/about">About</SiteNavLink>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink to="/">Course</SiteNavLink>
      </SiteNavEntry>
    </SiteNavList>
  </SiteNavContainer>
);

export default SiteNavbar;

const SiteNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const SiteNavList = styled.ul`
  padding-left: 0px;
`;

const SiteNavEntry = styled.li`
  list-style-type: none;
  display: inline;
  padding: 2rem;
`;

const SiteNavLink = styled(Link)`
  list-style-type: none;
  padding-bottom: 5px;
  margin-bottom: 0px;
  margin-left: 0px;
  color: #0091c9;
  text-decoration: none;
  transition: color 1s ease;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
    border-bottom: none;
  }
`;
