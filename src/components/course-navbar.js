import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const CourseNavbar = () => (
  <CourseNavbarContainer>
    <Accordion>
      <AccordionItem expanded={true}>
        <AccordionItemTitle className="accordion__title accordion__title--animated">
          <div className="u-position-relative">
            <ModuleTitle>Orientation</ModuleTitle>
            <div className="accordion__arrow" role="presentation" />
          </div>
        </AccordionItemTitle>
        <AccordionItemBody>
          <CourseNavEntry>
            <Link href="/introduction">
              <CourseNavLink>Welcome to Maker Foundations</CourseNavLink>
            </Link>
          </CourseNavEntry>
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  </CourseNavbarContainer>
);

export default CourseNavbar;

const CourseNavbarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  padding-top: 20px;
  background-color: #f5f4f5;
`;

const CourseNavbarNav = styled.nav`
  display: inline-block;
  margin: 0px;
  padding: 0px;
`;

const CourseNavList = styled.ul`
  margin-left: 1.45rem;
  padding: 5px;
`;
const CourseNavEntry = styled.li`
  list-style-type: none;
  padding-bottom: 5px;
  margin-bottom: 0px;
  margin-left: 1.25rem;
`;

const CourseNavLink = styled.a`
  list-style-type: none;
  padding-bottom: 5px;
  margin-bottom: 0px;
  margin-left: 0px;
  color: #0091c9;
  text-decoration: none;
  transition: color 1s ease;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
    border-bottom: none;
  }
`;

const ModuleTitle = styled.p`
  margin-bottom: 10px;
  margin-left: 0px;
  padding-right: 3rem;
  font-size: 1.25rem;
  font-weight: bolder;
`;
