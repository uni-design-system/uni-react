import React, { CSSProperties, ReactNode } from 'react';
import { ColorToken, ContainerColorToken, ShadowElevation, Size } from '@uni-design-system/uni-core';
import { BoxShadow, Padding, useTheme } from '../../core';

export type CardType = 'elevated' | 'filled' | 'outlined';

export interface CardProps {
  children?: ReactNode;
  cardType?: CardType;
  colorToken?: ContainerColorToken;
  elevation?: ShadowElevation;
  width?: number;
  height?: number | string | undefined;
  borderRadius?: Size | 'none';
}

export function Card({
  children,
  cardType,
  elevation,
  colorToken = 'primary-container',
  width,
  height,
  borderRadius,
}: CardProps) {
  const { colors, containers } = useTheme();

  const { borderRadii } = containers.card;

  const style: CSSProperties = {
    height,
    width,
    backgroundColor: colors[colorToken || 'surface'],
    color: colors[(`on-${colorToken}` as ColorToken) || 'on-surface'],
    ...Padding('md', 'all'),
  };

  if (cardType === 'elevated') {
    style.boxShadow = BoxShadow(elevation || 'raised');
  }

  if (borderRadii && borderRadius !== 'none') {
    style.borderRadius = borderRadii[borderRadius || 'md'];
  }

  return <div style={style}>{children}</div>;
}
