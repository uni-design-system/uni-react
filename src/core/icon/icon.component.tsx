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
  const theme = useTheme();
  const themeColor = theme.colors[color];

  const Icon = IconDictionary[name];

  console.log('IconDictionary', IconDictionary);

  return <Icon width={width} height={height} color={themeColor} />;
}
