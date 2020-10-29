import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { Decorator } from './decorator';

// custom components
import { CategoryRound } from '../components/CategoryRound';
import categoryItems from './Json/RoundedCategoryItem.json';

storiesOf('Category_roundComponent', module)
  .addDecorator(Decorator)
  .add('default', () => <CategoryRound categoryItems={categoryItems} />);
