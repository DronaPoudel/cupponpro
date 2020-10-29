import React from 'react';

// storybook
import {storiesOf} from '@storybook/react';
import {Decorator} from './decorator';

// custom components
import { ClientInfo } from '../components/ClientInfo';

storiesOf('ClientInfo component', module)
  .addDecorator(Decorator)
  .add('default', () => <ClientInfo />);