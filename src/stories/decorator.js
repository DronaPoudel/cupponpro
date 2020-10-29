import React from 'react';
// import { colors } from '../config/theme';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../config/store';

const styles = {
  // background: colors.backgroundColor,
  padding: '2rem',
  fontSize: '62.5%',
  fontFamily: 'Roboto',
};

export const Decorator = (storyFn) => <div style={styles}>{storyFn()}</div>;
export const withProvider = (storyFn) => (
  <Provider store={store}>
    <BrowserRouter>{storyFn()}</BrowserRouter>
  </Provider>
);
