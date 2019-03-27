import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const LessonContent = props => {
  const { LessonItems } = props.data;
  return (
    <Layout>
      <LessonTitle>{LessonItems.frontmatter.title} </LessonTitle>
      <LessonBody dangerouslySetInnerHTML={{ __html: LessonItems.html }} />
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

const LessonTitle = styled.h2`
  font-size: 3rem;
`;

const LessonBody = styled.main`
  font-size: 2rem;
`;
