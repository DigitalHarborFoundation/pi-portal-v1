import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const LessonContent = props => {
  const { LessonItems } = props.data;
  return (
    <Layout>
      <h1>{LessonItems.frontmatter.title} </h1>
      <main dangerouslySetInnerHTML={{ __html: LessonItems.html }} />
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
