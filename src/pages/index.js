import React from 'react';

import styled from 'styled-components';
import SEO from '../components/seo';
import heroImg from '../images/pi-portal-hero.jpg';

const IndexPage = () => (
  <LessonContainer>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LessonBody>
      <h2>Welcome to the Digital Harbor Foundation Pi Portal</h2>
 
      <img style={{ boxShadow: `0px 4px 10px rgba(0, 0, 0, 0.2)` }} src={heroImg} />
      <p style={{ color: `#63686B`, fontSize: `1.2rem` }}>
      Helping Schools Develop Low-Cost, High-Value, Computer Science Experiences!</p>     
    </LessonBody>
  </LessonContainer>
);

export default IndexPage;

const LessonContainer = styled.main`
  flex-grow: 1;
  min-height: 100vh;
  max-width: 900px;
  margin-top: 0;
  margin-bottom: 2.2rem;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.01);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 2rem;
  grid-area: content;
  @media only screen and (max-width: 1000px) {
    padding: 2rem;
  }

  @media only screen and (max-width: 1300px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

const LessonBody = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;
