import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Header from '../components/header';
import CourseNavbar from '../components/course-navbar';
import Footer from '../components/footer';
import '../components/layout.css';

const LessonContent = props => {
  const { LessonItems } = props.data;
  return (
    <MainContainer>
      <Header siteTitle="Pi Portal v1" />
      <ContentContainer>
        <CourseNavbar />
        <LessonContainer>
          <LessonTitle>{LessonItems.frontmatter.title} </LessonTitle>
          <LessonBody dangerouslySetInnerHTML={{ __html: LessonItems.html }} />
        </LessonContainer>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default LessonContent;

export const query = graphql`
  query LessonQuery($slug: String!) {
    LessonItems: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
const MainContainer = styled.div`
  display: grid;
`;

// const MainContent = styled.main`
//   margin: '0 auto';
//   max-width: 960px;
//   min-height: 100vh;
//   padding: '0px 1.0875rem 1.45rem';
//   padding-top: 0;
// `;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas:
    'sidebar content'
    'sidebar footer';

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'content'
      'sidebar'
      'footer';
  }
`;

const LessonTitle = styled.h1``;

const LessonContainer = styled.main`
  max-width: 50rem;
  min-height: 100vh;
  padding: 2rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  grid-area: content;
`;

const LessonBody = styled.article`
  display: flex;
  flex-direction: column;

  img {
    width: auto !important;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2) !important;
  }

  img:hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px,
      rgba(39, 44, 49, 0.04) 1px 6px 12px !important;
  }

  a {
    color: #0091c9;

    text-decoration: none;
    transition: color 0.5s ease;
  }

  a:hover {
    color: black;
    text-decoration: none;
    border-bottom: none;
    transition: color 0.5s ease;
  }

  li {
    line-height: 1.42rem;
  }
`;
