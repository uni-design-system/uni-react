import React from 'react';
import { Card, CardProps } from './card.component';
import { Text } from '../../core';
import { ContentColorToken } from '@uni-design-system/uni-core';

export default {
  title: 'Components/Cards',
  component: Card,
};

export const Elevated = (args: CardProps) => {
  return (
    <Card {...args}>
      <Text role="title-large" color={('on-' + args.colorToken) as ContentColorToken}>
        Sample Content
      </Text>
    </Card>
  );
};
Elevated.args = {
  colorToken: 'surface',
  cardType: 'elevated',
};
