import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { Decorator } from './decorator';

// custom components
import { SuperSlider } from '../components/SuperSlider';
import SuperSliderJson from './Json/SuperSliderCarousel.json';

storiesOf('SuperSlider', module)
  .addDecorator(Decorator)
  .add('default', () => <SuperSlider SupSliderItems={SuperSliderJson} />);
