import React from 'react';

// storybook
import {storiesOf} from '@storybook/react';
import {Decorator} from './decorator';

// custom components
import { Footer } from '../components/Footer';

storiesOf('Footer component', module)
  .addDecorator(Decorator)
  .add('default', () => < Footer />);