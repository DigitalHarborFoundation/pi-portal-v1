require('prismjs/themes/prism-okaidia.css');
import React from 'react';
import Layout from './src/components/layout';
import { Location } from '@reach/router';

export const wrapPageElement = ({ element, props }) => {
  if (location.pathname.match(/^\/lessons/)) {
    return <Layout {...props}>{element}</Layout>;
  } else {
    return (
      <React.Fragment>
        <h1>TOTALLY SEPARATE LAYOUT!</h1>
      </React.Fragment>
    );
  }
};
