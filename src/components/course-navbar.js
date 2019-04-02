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
    <CourseNavbarNav>
      <CourseNavList>
        <Accordion>
          <CourseNavEntry>
            <AccordionItem expanded={true}>
              <AccordionItemTitle className="accordion__title accordion__title--animated">
                <div className="u-position-relative">
                  <ModuleTitle>Introduction</ModuleTitle>
                  <div className="accordion__arrow" role="presentation" />
                </div>
              </AccordionItemTitle>
              <AccordionItemBody>
                <CourseNavLink to="/lessons/course-philosophy">
                  Course Philosophy
                </CourseNavLink>
              </AccordionItemBody>
              <AccordionItemBody>
                <CourseNavEntry>
                  <CourseNavLink to="/lessons/course-overview-goals">
                    Course Overview and Goals
                  </CourseNavLink>
                </CourseNavEntry>
              </AccordionItemBody>
            </AccordionItem>
          </CourseNavEntry>
          <AccordionItem>
            <AccordionItemTitle className="accordion__title accordion__title--animated">
              <div className="u-position-relative">
                <ModuleTitle>Introducing the Raspberry Pi</ModuleTitle>
                <div className="accordion__arrow" role="presentation" />
              </div>
            </AccordionItemTitle>
            <AccordionItemBody>
              <CourseNavEntry>
                <CourseNavLink to="/lessons/raspberry-pi-basics">
                  Raspberry Pi Basics
                </CourseNavLink>
              </CourseNavEntry>
            </AccordionItemBody>
            <AccordionItemBody>
              <CourseNavEntry>
                <CourseNavLink to="/lessons/raspberry-pi-hardware-overview">
                  Raspberry Pi: Hardware Overview
                </CourseNavLink>
              </CourseNavEntry>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle className="accordion__title accordion__title--animated">
              <div className="u-position-relative">
                <ModuleTitle>HTML Basics</ModuleTitle>
                <div className="accordion__arrow" role="presentation" />
              </div>
            </AccordionItemTitle>
            <AccordionItemBody>
              <CourseNavEntry>
                <CourseNavLink to="/lessons/html-basics-part-1">
                  HTML Basics: Part 1
                </CourseNavLink>
              </CourseNavEntry>
            </AccordionItemBody>
            <AccordionItemBody>
              <CourseNavEntry>
                <CourseNavLink to="/lessons/html-attributes">
                  HTML Attributes
                </CourseNavLink>
              </CourseNavEntry>
            </AccordionItemBody>
            <AccordionItemBody>
              <CourseNavEntry>
                <CourseNavLink to="/lessons/adding-images">
                  Adding Images
                </CourseNavLink>
              </CourseNavEntry>
            </AccordionItemBody>
            <AccordionItemBody>
              <CourseNavEntry>
                <CourseNavLink to="/lessons/linking-betweeen-pages">
                  Linking Between Pages
                </CourseNavLink>
              </CourseNavEntry>
            </AccordionItemBody>
            <AccordionItemBody>
              <CourseNavEntry>
                <CourseNavLink to="/lessons/creating-page-structure-with-html">
                  Creating a Page Structure With HTML
                </CourseNavLink>
              </CourseNavEntry>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </CourseNavList>
    </CourseNavbarNav>
  </CourseNavbarContainer>
);

export default CourseNavbar;

const CourseNavbarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  /* padding-top: 20px; */
  margin-top: 2rem;
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
  /* padding-bottom: 5px; */
  margin-bottom: 0px;
  /* margin-left: 1.25rem; */
`;

const CourseNavLink = styled(Link)`
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
