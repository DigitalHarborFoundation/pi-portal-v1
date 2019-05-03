import React from 'react';

import styled from 'styled-components';
import SEO from '../components/seo';
import heroImg from '../images/pi-portal-hero.jpg';

const IndexPage = () => (
  <LessonContainer>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LessonBody>
      <h2>Welcome to the Digital Harbor Foundation Pi Portal</h2>
      <img src={heroImg} />
      <h2>Background and Context</h2>
      <p>
        House Bill 281, signed into law by Governor Hogan in May 2018, requires
        that every high school offers a computer science course beginning in the
        2021-2022 school year and that every school district demonstrates
        efforts to incorporate CS instruction in elementary and middle school
        environments. According to a Fiscal and Policy Note Analysis conducted
        by the Department of Legislative Services: while 158 high schools across
        the state are currently offering some form of Advanced Placement (AP) or
        International Baccalaureate (IB) CS course, a total of 129 high schools
        statewide report not currently offering any CS class at all.
      </p>
      <h2>Piloting a Solution</h2>
      <p>
        To help schools, and with the support of the Maryland Center for
        Computing Education (MCCE), we are currently piloting a high-quality and
        low-cost option based on our previous work with low-cost devices in our
        computer science programs. Through this pilot program, we are deploying
        classroom sets of Raspberry Pi portals in three school districts,
        creating a comprehensive solution that includes: A classroom technology
        architecture guide A standard-aligned student curriculum An introductory
        educator workshop Ongoing educator community of practice Device
        servicing support structure.
      </p>
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
