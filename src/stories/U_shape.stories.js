import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { Decorator } from './decorator';

// custom components
import { U_Shape } from '../components/global/CardShapes';

storiesOf('U_Shape component', module)
  .addDecorator(Decorator)
  .add('U_Shapes', () => <U_Shape />);
