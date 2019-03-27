import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const LessonContent = ({ lessonTitle, lessonContent }) => (
  <Layout>
    <LessonTitle>{lessonTitle} </LessonTitle>
    <LessonContent>{lessonContent}</LessonContent>
  </Layout>
);

export default LessonContent;

LessonContent.propTypes = {
  lessonTitle: PropTypes.string,
  lessonContent: PropTypes.string,
};

LessonContent.defaultProps = {
  lessonTitle: ``,
  lessonContent: ``,
};

const LessonTitle = styled.h1`
  font-size: 4rem;
`;

const LessonCopy = styled.article`
  font-size: 2rem;
`;
