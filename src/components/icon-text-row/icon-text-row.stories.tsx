import React from 'react';
import { IconTextRow, IconTextRowProps } from './icon-text-row.component';

export default {
  title: 'Typography/Icon-Text Row',
  component: IconTextRow,
};

export const Heart = (args: IconTextRowProps) => <IconTextRow {...args} />;

Heart.args = {
  color: 'on-background',
  iconName: 'chessKnightSolid',
  text: 'Chess',
  textRole: 'headline-large',
};
