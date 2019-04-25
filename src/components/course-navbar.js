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

const activeStyles = {
  color: '#e96544',
};

const CourseNavbar = () => (
  <CourseNavbarContainer>
    <CourseNavbarNav>
      <Accordion>
        <AccordionItem expanded={true}>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Introduction</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/course-philosophy"
              activeStyle={activeStyles}
            >
              Course Philosophy
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/course-overview-goals"
              activeStyle={activeStyles}
            >
              Course Overview and Goals
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Introducing the Raspberry Pi</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/raspberry-pi-basics"
              activeStyle={activeStyles}
            >
              Raspberry Pi Basics
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/raspberry-pi-hardware-overview"
              activeStyle={activeStyles}
            >
              Raspberry Pi: Hardware Overview
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Working With HTML</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/html-basics-part-1"
              activeStyle={activeStyles}
            >
              HTML Basics: Part 1
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/html-attributes"
              activeStyle={activeStyles}
            >
              HTML Attributes
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/adding-images"
              activeStyle={activeStyles}
            >
              Adding Images
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/linking-betweeen-pages"
              activeStyle={activeStyles}
            >
              Linking Between Pages
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/creating-page-structure-with-html"
              activeStyle={activeStyles}
            >
              Creating a Page Structure With HTML
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Working With CSS</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/css-basics-part-1"
              activeStyle={activeStyles}
            >
              CSS Basics: Part 1
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/css-page-layout-part-1"
              activeStyle={activeStyles}
            >
              CSS for Page Layout: Part 1
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Designing for Users</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/creating-wireframe"
              activeStyle={activeStyles}
            >
              Creating a Wireframe
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Navigating in Linux</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/command-line-basics"
              activeStyle={activeStyles}
            >
              Command Line Basics
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/introducing-ssh"
              activeStyle={activeStyles}
            >
              Introducing SSH
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle className="accordion__title accordion__title--animated">
            <div className="u-position-relative">
              <ModuleTitle>Setting Up a Server</ModuleTitle>
              <div className="accordion__arrow" role="presentation" />
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/how-internet-works-part-1"
              activeStyle={activeStyles}
            >
              How the Internet Works: Part 1
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/how-internet-works-part-2"
              activeStyle={activeStyles}
            >
              How the Internet Works: Part 2
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/loading-content-onto-server"
              activeStyle={activeStyles}
            >
              Loading Content Onto a Server
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/setting-up-local-ip-address"
              activeStyle={activeStyles}
            >
              Setting Up a Local IP Address
            </CourseNavLink>
          </AccordionItemBody>
          <AccordionItemBody>
            <CourseNavLink
              to="/lessons/accessing-your-site"
              activeStyle={activeStyles}
            >
              Accessing Your Site
            </CourseNavLink>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </CourseNavbarNav>
  </CourseNavbarContainer>
);

export default CourseNavbar;

const CourseNavbarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  margin-top: 2rem;
  overflow-y: auto;
  height: 100%;
  border-right: 2px solid rgba(0, 0, 0, 0.1);
`;

const CourseNavbarNav = styled.nav`
  display: inline-block;
  padding: 0px;
`;

const CourseNavLink = styled(Link)`
  list-style-type: none;
  padding-bottom: 5px;
  font-size: 1rem;
  margin-bottom: 0px;
  margin-left: 0px;
  color: #63686b;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    border-bottom: none;
  }
`;

const ModuleTitle = styled.p`
  margin-bottom: 10px;
  margin-left: 0px;
  padding-right: 3rem;
  font-size: 1rem;
  font-weight: bolder;
`;
