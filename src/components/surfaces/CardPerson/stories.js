import React from 'react';
import CardPerson from './';

import { action } from '@storybook/addon-actions';

export default {
  title: 'surfaces/CardPerson',
  component: CardPerson,
};

const person = {
  id: Math.random(),
  name: "David James",
  picture: "/assets/img/1.png",
  address: {
    street: "1 kingsgrove st",
    postcode: "4226",
    city: "Gold Coast"
  },
  user: {
    username: 'djames'
  },
  phone: "0468 728 942",
  instagram: "davidjames",
  facebook: "davidjames",
  email: "davidjames@gmail.com",
}

export const basic = () => <CardPerson
  person={ person }
  onEditClick={ action('Edit-click') }
/>;