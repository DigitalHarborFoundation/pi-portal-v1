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
  img {
    width: auto;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  img: hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  a {
    color: #0091c9;
    font-family: 'Avenir';
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
