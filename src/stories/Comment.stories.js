import React from 'react';

// storybook
import {storiesOf} from '@storybook/react';
import {Decorator} from './decorator';

// custom components
import { Comment } from '../components/Comment';

storiesOf('Comment component', module)
  .addDecorator(Decorator)
  .add('default', () => <Comment />);