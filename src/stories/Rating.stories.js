import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { Decorator } from './decorator';

// custom components
import { Rating } from '../components/global/Rating';

storiesOf('Ratingcomponent', module)
  .addDecorator(Decorator)
  .add('default', () => <Rating />);
