import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import heroImg from '../images/pi-portal-hero.jpg';

const IndexPage = () => (
  <LessonContainer>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LessonBody>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta explicabo
      incidunt eum maiores odit architecto necessitatibus atque fugiat ullam et,
      ex sapiente impedit accusamus libero perferendis a. Optio, est fuga.
      <img src={heroImg} />
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
