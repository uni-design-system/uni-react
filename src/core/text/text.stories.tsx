import * as React from 'react';
import { Text, TextProps } from './text.component';

export default {
  title: 'Typography/Text',
  component: Text
};

export const BasicText = (args: TextProps) => <Text {...args} />;
BasicText.args = {
  role: 'title',
  children: 'Sample',
  color: 'on-background'
}

BasicText.story = {
  name: 'Title',
};
