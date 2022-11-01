import React, { CSSProperties, ReactNode } from 'react';
import { ColorToken, ContainerColorToken, ShadowElevation } from '@uni-design-system/uni-core';
import { BoxShadow, Padding, useTheme } from '../../core';

export type CardType = 'elevated' | 'filled' | 'outlined';

export interface CardProps {
  children?: ReactNode;
  cardType?: CardType;
  colorToken: ContainerColorToken;
  elevation?: ShadowElevation;
  width?: number;
}

export function Card({ children, cardType, elevation, colorToken, width }: CardProps) {
  const theme = useTheme();

  const cardProps = theme.containers.card;

  const style: CSSProperties = {
    backgroundColor: theme.colors[colorToken || 'surface'],
    color: theme.colors[(`on-${colorToken}` as ColorToken) || 'on-surface'],
    ...Padding('md', 'all'),
  };

  if (width) style.width = width;

  if (cardType === 'elevated') {
    style.boxShadow = BoxShadow(elevation || 'raised');
  }

  if (cardProps.borderRadii) {
    style.borderRadius = cardProps.borderRadii['md'];
  }

  return <div style={style}>{children}</div>;
}
