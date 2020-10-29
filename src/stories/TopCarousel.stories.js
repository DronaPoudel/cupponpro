import React from 'react';

// storybook
import {storiesOf} from '@storybook/react';
import {Decorator} from './decorator';

// custom components
import {TopCarousel} from '../components/TopCarousel';
import carouselItems from './Json/TopCarousel.json';

storiesOf('TopCarousel component', module)
  .addDecorator(Decorator)
  .add('default', () => <TopCarousel carouselItems= {carouselItems} />);