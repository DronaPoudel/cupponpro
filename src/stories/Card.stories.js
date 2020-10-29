import React from 'react';

// storybook
import {storiesOf} from '@storybook/react';
import {Decorator} from './decorator';

// custom components
import {TrendingCupons} from '../components/Card';
import {FashionCard} from '../components/Card';


storiesOf('Card', module)
  .addDecorator(Decorator)
  .add('TrendingCupons', () => <TrendingCupons />)
  .add('FashionCard', () => <FashionCard />);
