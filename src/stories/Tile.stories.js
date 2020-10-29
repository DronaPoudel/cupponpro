import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { Decorator } from './decorator';

// custom components
import { Tile } from '../components/Tile';

storiesOf('Tile component', module)
  .addDecorator(Decorator)
  .add('default', () => <Tile />);
