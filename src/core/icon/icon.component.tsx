import React from 'react';
import { ContentColorToken } from '@uni-design-system/uni-core';
import { IconDictionary, IconName } from '@uni-design-system/uni-react-icons';
import { useTheme } from '../theme';

export interface IconProps {
  name?: IconName;
  color?: ContentColorToken;
  height?: number;
  width?: number;
}

export function Icon({ name = 'heartSolid', color = 'on-surface', height = 24, width = 24 }: IconProps) {
  const { colors } = useTheme();
  const Icon = IconDictionary[name];
  return <Icon width={width} height={height} color={colors[color]} />;
}
