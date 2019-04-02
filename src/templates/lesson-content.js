import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const LessonContent = props => {
  const { LessonItems } = props.data;
  return (
    <Layout>
      <LessonContainer>
        <LessonTitle>{LessonItems.frontmatter.title} </LessonTitle>
        <LessonBody dangerouslySetInnerHTML={{ __html: LessonItems.html }} />
      </LessonContainer>
    </Layout>
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

const LessonTitle = styled.h1`
  font-family: 'Avenir';
`;

const LessonContainer = styled.main`
  font-family: 'Avenir';
  display: flex;
  flex-direction: column;
  grid-area: content;
  margin-top: 0;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
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
    font-family: Avenir;
    text-decoration: none;
    transition: color 0.5s ease;
  }

  a:hover {
    color: black;
    text-decoration: none;
    border-bottom: none;
    transition: color 0.5s ease;
  }
`;
