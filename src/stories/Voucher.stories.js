import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { Decorator } from './decorator';

// custom components
import { Voucher } from '../components/Voucher';

storiesOf('Voucher component', module)
  .addDecorator(Decorator)
  .add('default', () => <Voucher />);
