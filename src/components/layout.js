import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import CourseNavbar from './course-navbar';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <MainContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ContentContainer>
          <CourseNavbar />
          {children}
        </ContentContainer>
      </MainContainer>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const MainContainer = styled.div`
  display: grid;
`;

const MainContent = styled.main`
  margin: '0 auto';
  max-width: 960px;
  min-height: 100vh;
  padding: '0px 1.0875rem 1.45rem';
  padding-top: 0;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-areas:
    "sidebar content"
    "sidebar footer";
   
    @media only screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
      grid-template-areas:
      "content"
      "sidebar"
      "footer"
`;
