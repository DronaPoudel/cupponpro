import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { Decorator } from './decorator';

// custom components
import {
  CollectButton,
  CpButton,
  RedeemButton,
  ProfileButton,
} from '../components/Button';
import { IoMdStar } from 'react-icons/io';

const btnClick = () => {
  alert('you have clicked');
};
storiesOf('Buttoncomponent', module)
  .addDecorator(Decorator)
  .add('CollectButton', () => <CollectButton />)
  .add('RedeemButton', () => <RedeemButton />)
  .add('ProfileButton', () => <ProfileButton />)
  .add('CpButton', () => (
    <CpButton
      primary
      btnText={'test button'}
      handleButtonPressed={btnClick}
      bntIcon={<IoMdStar size={30} />}
    />
  ));
