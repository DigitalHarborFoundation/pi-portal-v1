import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';

const AboutPage = () => (
  <React.Fragment>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h1>About this project!</h1>
  </React.Fragment>
);

export default AboutPage;
