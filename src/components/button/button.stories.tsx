import * as React from 'react';
import { Button, ButtonProps } from './button.component';

export default {
  title: 'Buttons',
  component: Button
};

export const BasicButton = (args: ButtonProps) => <Button {...args} />;
BasicButton.args = {
  disabled: false,
  children: 'Sample'
}

BasicButton.story = {
  name: 'Button',
};
