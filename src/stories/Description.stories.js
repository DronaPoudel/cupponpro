import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { Decorator } from './decorator';

// custom components
import { Description } from '../components/Description';

storiesOf('Description component', module)
  .addDecorator(Decorator)
  .add('default', () => <Description />);
