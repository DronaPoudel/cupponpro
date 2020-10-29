import React from 'react';

// storybook
import {storiesOf} from '@storybook/react';
import {Decorator} from './decorator';

// custom components
import {FashionBar} from '../components/CategoryBar/FashionBar';


storiesOf('CategoryBar', module)
  .addDecorator(Decorator)
  .add('FashionBar', () => <FashionBar />);
