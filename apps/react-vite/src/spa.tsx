import React from 'react';
import ReactDOMClient from 'react-dom/client';
// SingleSpaContext is a react@16.3 (if available) context that provides singleSpa props
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import singleSpaReact, { SingleSpaContext } from 'single-spa-react';

import { App } from './app';

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});
