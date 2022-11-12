import React, { CSSProperties, ReactNode } from 'react';
import { ColorToken, ContainerColorToken, ShadowElevation } from '@uni-design-system/uni-core';
import { BoxShadow, Padding, useTheme } from '../../core';
import { motion } from 'framer-motion';

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

  return (
    <motion.div
      style={style}
      initial={{ y: 36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 36, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
