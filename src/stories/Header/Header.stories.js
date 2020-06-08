
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Header',
  component: Button,
};

export const Header = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      Buttons
    </span>
  </Button>
);
