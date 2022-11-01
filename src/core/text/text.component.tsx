import React, { CSSProperties, ReactNode } from 'react';

import {
  ColorToken,
  ContentColorToken,
  FontWeight,
  FontWeightMap,
  HorizontalAlign,
  Size,
  TextRole,
  Theme,
} from '@uni-design-system/uni-core';
import { useTheme } from '../theme';

export interface TextProps {
  text?: string;
  children?: ReactNode;
  align?: HorizontalAlign;
  role: TextRole;
  scale?: Size;
  color?: ContentColorToken;
}

export function Text(props: TextProps) {
  const { text, children, align, role, color } = props;
  const theme = useTheme();
  const style = Style(theme, align, role, color);

  return <div style={style}>{text || children}</div>;
}

function Style(
  theme: Theme,
  textAlign: HorizontalAlign | undefined,
  role: TextRole,
  color: ColorToken | undefined,
): CSSProperties {
  const { fontSize, letterSpacing, lineHeight, fontWeight, fontFamily, fontStyle, textTransform } =
    theme.typography[role];
  return {
    color: theme.colors[color as ColorToken | 'on-background'],
    fontSize: fontSize + 'px',
    letterSpacing,
    textAlign,
    textTransform,
    lineHeight: lineHeight + 'px',
    fontFamily,
    fontStyle,
    fontWeight: FontWeightMap[fontWeight as FontWeight],
  };
}
