import React from 'react';
import Layout from './src/components/layout';
import { Location } from '@reach/router';

export const wrapPageElement = ({ element, props }) => {
  if (location.pathname.match(/^\/lessons/)) {
    return <Layout {...props}>{element}</Layout>;
  } else {
    return (
      <div style={{ margin: '10vh auto', maxWidth: '960px' }}>
        <h1 style={{ fontSize: '32px' }}>TOTALLY SEPARATE LAYOUT!</h1>
        <p style={{ fontSize: '16px' }}>
          THIS WILL BE A LANDING PAGE / ABOUT PAGE FOR THE COURSE SINCE I
          FIGURED OUT HOW TO USE CONDITIONAL LAYOUT RENDERING. FOR NOW, HEAD
          HERE:
        </p>
        <Link style={{ fontSize: '16px' }} to="/lessons/course-philosophy">
          Course Philosophy
        </Link>
      </div>
    );
  }
};
