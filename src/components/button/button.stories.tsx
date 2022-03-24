import React from 'react';
import { Button, ButtonProps } from './button.component';

export default {
  title: 'Buttons',
  component: Button
};

export const Filled = (args: ButtonProps) => <Button {...args} />;

Filled.args = {
  disabled: false,
  buttonType: 'filled',
  text: 'Filled Button'
}

Filled.story = {
  name: 'Filled Button',
};


export const Elevated = (args: ButtonProps) => <Button {...args} />;

Elevated.args = {
  disabled: false,
  buttonType: 'elevated',
  text: 'Elevated Button'
}

Elevated.story = {
  name: 'Elevated Button',
};

export const Outlined = (args: ButtonProps) => <Button {...args} />;

Outlined.args = {
  disabled: false,
  buttonType: 'outlined',
  text: 'Outlined Button'
}

Outlined.story = {
  name: 'Outlined Button',
};
