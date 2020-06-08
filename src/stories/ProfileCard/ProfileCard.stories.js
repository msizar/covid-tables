
import React from 'react';
import { action } from '@storybook/addon-actions';
import ProfileCard from '../../components/ProfileCard';

export default {
  title: 'ProfileCard',
  component: ProfileCard,
};

const userData = {user: { name: 'Zakes'},
  homeworld: 'test 1',
};

export const ProfileCards = () => (
  <ProfileCard users={userData}/>
);
