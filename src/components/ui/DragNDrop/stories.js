import React from 'react';
import DragNDrop from './';
import { Avatar, Typography } from '@material-ui/core';

export default {
  title: 'ui/DragNDrop',
  component: DragNDrop,
};

const droppableList = [
  {
    id: 'allowed',
    title: 'Staff Allowed',
    items: [{
      "id": 1,
      "first_name": "Bibi",
      "last_name": "Kmicicki",
      "email": "bkmicicki0@yellowpages.com",
      "picture": "https://robohash.org/corruptieaoptio.jpg?size=50x50&set=set1"
    }, {
      "id": 2,
      "first_name": "Inger",
      "last_name": "Kalinowsky",
      "email": "ikalinowsky1@fotki.com",
      "picture": "https://robohash.org/magniofficiasimilique.jpg?size=50x50&set=set1"
    }, {
      "id": 3,
      "first_name": "Samuele",
      "last_name": "Cornels",
      "email": "scornels2@google.cn",
      "picture": "https://robohash.org/aliquamdolorumab.jpg?size=50x50&set=set1"
    }, {
      "id": 4,
      "first_name": "Aubrette",
      "last_name": "Calam",
      "email": "acalam3@etsy.com",
      "picture": "https://robohash.org/quiesteveniet.jpg?size=50x50&set=set1"
    }]
  },
  {
    id: 'notallowed',
    title: 'Staff Not Allowed',
    items: [{
      "id": 1,
      "first_name": "Adorne",
      "last_name": "Screech",
      "email": "ascreech0@dot.gov",
      "picture": "https://robohash.org/enimautemdolore.jpg?size=50x50&set=set1"
    }, {
      "id": 2,
      "first_name": "Kele",
      "last_name": "Bootland",
      "email": "kbootland1@t-online.de",
      "picture": "https://robohash.org/numquamearumqui.jpg?size=50x50&set=set1"
    }, {
      "id": 3,
      "first_name": "Aubrie",
      "last_name": "Boom",
      "email": "aboom2@tumblr.com",
      "picture": "https://robohash.org/rationenequeaut.jpg?size=50x50&set=set1"
    }, {
      "id": 4,
      "first_name": "Eugenie",
      "last_name": "Markwick",
      "email": "emarkwick3@go.com",
      "picture": "https://robohash.org/sedharumnesciunt.jpg?size=50x50&set=set1"
    }, {
      "id": 5,
      "first_name": "Bud",
      "last_name": "Braksper",
      "email": "bbraksper4@diigo.com",
      "picture": "https://robohash.org/explicaboquovelit.jpg?size=50x50&set=set1"
    }, {
      "id": 6,
      "first_name": "Antonius",
      "last_name": "Beevers",
      "email": "abeevers5@boston.com",
      "picture": "https://robohash.org/magnammagniporro.jpg?size=50x50&set=set1"
    }, {
      "id": 7,
      "first_name": "Marwin",
      "last_name": "Nerne",
      "email": "mnerne6@slideshare.net",
      "picture": "https://robohash.org/nostrumeasit.jpg?size=50x50&set=set1"
    }, {
      "id": 8,
      "first_name": "Aubrette",
      "last_name": "Hambleton",
      "email": "ahambleton7@netvibes.com",
      "picture": "https://robohash.org/voluptatemesthic.jpg?size=50x50&set=set1"
    }, {
      "id": 9,
      "first_name": "Trefor",
      "last_name": "Dargie",
      "email": "tdargie8@spiegel.de",
      "picture": "https://robohash.org/rerumaliaset.jpg?size=50x50&set=set1"
    }, {
      "id": 10,
      "first_name": "Winn",
      "last_name": "Strickler",
      "email": "wstrickler9@hubpages.com",
      "picture": "https://robohash.org/quasvoluptassint.jpg?size=50x50&set=set1"
    }]
  }
]

export const basic = () => <DragNDrop  style={{ width: '50%' }} droppableList={ droppableList } renderItem={ user => (
  <div style={{ display: 'flex', alignItems: 'center'}} >
    <Avatar id={ user.id } image={{ src: user.picture, alt: `${ user.firstname } picture`, height: '40px' }} style={{ marginRight: '15px' }} />
    <Typography variant='body1'> { user.first_name } { user.last_name } </Typography>
  </div>
)} />;