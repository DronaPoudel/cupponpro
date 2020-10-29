import React from 'react';

// storybook
import {storiesOf} from '@storybook/react';
import {Decorator} from './decorator';

// custom components
import { DisplayCarousel } from '../components/DisplayCarousel';

storiesOf('DisplayCarousel component', module)
  .addDecorator(Decorator)
  .add('default', () => <DisplayCarousel />);