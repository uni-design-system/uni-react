import React from 'react';
import { Icon, IconProps } from './icon.component';

export default {
  title: 'Typography/Icons',
  component: Icon,
};

export const Heart = (args: IconProps) => <Icon {...args} />;

Heart.args = {
  name: 'favorite',
  color: 'on-surface',
  height: 48,
  width: 48,
};
