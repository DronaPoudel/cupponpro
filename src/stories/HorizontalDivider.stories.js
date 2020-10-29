import React from 'react';

// storybook
import {storiesOf} from '@storybook/react';
import {Decorator} from './decorator';

// custom components
import {HorizontalDivider} from '../components/HorizontalDivider';


storiesOf('HorizontalDivider', module)
  .addDecorator(Decorator)
  .add('HorizontalDivider', () => <HorizontalDivider />);
