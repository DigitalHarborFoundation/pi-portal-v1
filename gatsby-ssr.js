import React from 'react';
import Layout from './src/components/layout';
import { Location } from '@reach/router';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
