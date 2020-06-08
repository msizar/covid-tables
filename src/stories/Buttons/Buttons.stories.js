
import React from 'react';
import Buttons from '../../components/Buttons';

export default {
  title: 'Button',
  component: Buttons,
};



export const Button = () => (
  <Buttons variant='contained'> Primary Button </Buttons>
);

export const SecondaryButton = () => (
    <Buttons variant='outlined' > Secondary Button </Buttons>
);

export const TextButton = () => (
    <Buttons variant='text' > Text Button </Buttons>
);

export const LinkButton = () => (
    <Buttons variant='link' > Go to link </Buttons>
);