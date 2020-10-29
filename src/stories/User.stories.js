import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { Decorator } from './decorator';

// custom components
import { User } from '../components/User';

storiesOf('User component', module)
  .addDecorator(Decorator)
  .add('default', () => <User />);
