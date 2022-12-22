import React, { CSSProperties, ReactNode } from 'react';
import { ShadowElevation } from '@uni-design-system/uni-core';
import { BoxShadow, Padding, Text, useTheme } from '../../core';

export type CardType = 'elevated' | 'filled' | 'outlined';

export interface ColorSwatchProps {
  swatchColor: string;
  children?: ReactNode;
  cardType?: CardType;
  elevation?: ShadowElevation;
  width?: string | number;
  height?: string | number;
}

export function ColorSwatch({
  swatchColor,
  children,
  cardType = 'elevated',
  elevation,
  width,
  height,
}: ColorSwatchProps) {
  const theme = useTheme();

  const { borderRadii } = theme.containers.card;

  const cardStyle: CSSProperties = {
    height,
    width,
    display: 'inline-block',
    backgroundColor: theme.colors['background'],
    color: theme.colors['on-background'],
    borderRadius: borderRadii?.sm,
    ...Padding('xs', 'all'),
    margin: 8,
  };

  if (cardType === 'elevated') {
    cardStyle.boxShadow = BoxShadow(elevation || 'pressed');
  }

  const swatchStyle: CSSProperties = {
    backgroundColor: swatchColor,
    height: 200,
    width: 200,
    display: 'inline-block',
    borderRadius: borderRadii?.xs,
  };

  return (
    <div style={cardStyle}>
      <div style={swatchStyle} />
      <Text role="headline-medium">{children}</Text>
      <Text role="title-small">{swatchColor}</Text>
    </div>
  );
}
