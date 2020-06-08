
import React from 'react';
import { action } from '@storybook/addon-actions';
import GridList from '../../components/FullWidthGrid';

export default {
  title: 'Grids',
  component: GridList,
};

const userData = [ {user: { name: 'Zakes'},
  homeworld: 'test 1',
  image: 'js'}, {user: { name: 'mandle'},
  homeworld: 'test 2',
  image: 'js'}, {user: { name: 'zigoni'},
  homeworld: 'test 3',
  image: 'js'}, {user: { name: 'Perinls'},
  homeworld: 'test 4',
  image: 'js'}, {user: { name: 'Hasmk'},
  homeworld: 'test 5',
  image: 'js'}, {user: { name: 'Mndkle'},
  homeworld: 'test 6',
  image: 'js'}, {user: { name: 'Snadjfu'},
  homeworld: 'test 7',
  image: 'js'}, {user: { name: 'Perusol'},
  homeworld: 'test 8',
  image: 'js'},]

export const GridLists = () => (
  <GridList users={userData}/>
);
