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
        <CourseNavbar />
        {children}
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
  min-height: 100vh;
  background: #fafafa;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    'header header'
    'sidebar content'
    'footer footer';

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'content'
      'sidebar'
      'footer';
  }
`;
