import React from 'react';

// storybook
import {storiesOf} from '@storybook/react';
import {Decorator} from './decorator';

// custom components
import { PartnersCarousel } from '../components/PartnersCarousel';
import brandItems from './Json/PartnersCarousel.json';

storiesOf('PartnersCarousel component', module)
  .addDecorator(Decorator)
  .add('default', () => <PartnersCarousel brandItems={ brandItems }/>);