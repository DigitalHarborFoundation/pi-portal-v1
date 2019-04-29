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
  background: #fafafa;
  grid-template-columns: 1fr 4fr;
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

const ContentArea = styled.div`
  margin: '0 auto';
  max-width: 960px;
  min-height: 100vh;
  padding: '0px 1.0875rem 1.45rem';
  padding-top: 0;
`;

const ContentContainer = styled.div``;
