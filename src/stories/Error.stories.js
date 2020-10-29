import React from 'react';

// storybook
import {storiesOf} from '@storybook/react';
import {Decorator} from './decorator';

// custom components
import { Error } from '../components/Error';

storiesOf('Error component', module)
  .addDecorator(Decorator)
  .add('default', () => <Error />);