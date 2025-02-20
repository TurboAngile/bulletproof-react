import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/index.css';
import i18n from '../src/i18n/i18n'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  i18n
};

export const decorators = [
  (Story) => (
    <Router>
      <Story />
    </Router>
  ),
];
