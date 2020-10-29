import React, { Fragment } from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { Decorator } from './decorator';

// custom component
import { BoxCard } from '../components/global/BoxCard';

const cardBody = () => {
  return (
    <Fragment>
      <div> this is the card component</div>
      <div> this is the card component 2</div>
    </Fragment>
  );
};

storiesOf(' card border box', module)
  .addDecorator(Decorator)
  .add('default', () => <BoxCard />)
  .add('with body', () => (
    <Fragment>
      <BoxCard cardBody={cardBody()} />
      <BoxCard cardBody={cardBody()} />
      <BoxCard cardBody={cardBody()} />
      <BoxCard cardBody={cardBody()} />
      <BoxCard cardBody={cardBody()} />
    </Fragment>
  ));
