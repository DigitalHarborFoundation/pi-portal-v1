import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const LessonContent = ({ lessonTitle, lessonContent }) => (


)

export default LessonContent;

LessonContent.propTypes = {
  lessonTitle: propTypes.string,
  lessonContent: propTypes.string,
}

LessonContent.defaultProps = {
  lessonTitle: ``,
  lessonContent: ``,
}