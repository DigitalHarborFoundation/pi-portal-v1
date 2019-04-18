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
    <LessonContainer>
      <LessonTitle>{LessonItems.frontmatter.title} </LessonTitle>
      <LessonBody dangerouslySetInnerHTML={{ __html: LessonItems.html }} />
    </LessonContainer>
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

const LessonTitle = styled.h1``;

const LessonContainer = styled.main`
  min-height: 100vh;
  max-width: 40rem;
  margin: 0 auto;
  padding-top: 2rem;
  background: red;
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
