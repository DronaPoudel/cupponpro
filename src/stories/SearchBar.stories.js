import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { Decorator } from './decorator';

// custom components
import { SearchBar } from '../components/SearchBar';

storiesOf('SearchBarcomponent', module)
  .addDecorator(Decorator)
  .add('default', () => <SearchBar />);
