import React, { CSSProperties, ReactNode } from 'react';
import { ColorToken, ContainerColorToken, ShadowElevation } from '@uni-design-system/uni-core';
import { BoxShadow } from '../../core/shadow/shadow.style';
import useTheme from '../../core/theme/theme.hook';
import { Padding } from '../../core/padding/padding.style';

export type CardType = 'elevated' | 'filled' | 'outlined';

export interface CardProps {
  children?: ReactNode;
  cardType?: CardType;
  colorToken: ContainerColorToken;
  elevation?: ShadowElevation;
}

export function Card({ children, cardType, elevation, colorToken }: CardProps) {

  const theme = useTheme();

  const cardProps = theme.containers.card;

  const style: CSSProperties = {
    backgroundColor: theme.colors[colorToken || 'surface'],
    color: theme.colors[`on-${colorToken}` as ColorToken || 'on-surface'],
    ...Padding('md', 'all')
  };

  if (cardType === 'elevated') {
    style.boxShadow = BoxShadow(elevation || 'raised');
  }

  if (cardProps.borderRadii) {
    style.borderRadius = cardProps.borderRadii['md'];
  }

  return(
    <div style={style}>
      { children }
    </div>
  )
}
