import React, { CSSProperties, ReactNode } from 'react';
import useTheme from '../theme/theme.hook';
import {
  ColorToken,
  FontWeight,
  FontWeightMap,
  HorizontalAlign,
  Size,
  TextRole,
  Theme
} from '@uni-design-system/uni-core';

export interface TextProps {
  children: ReactNode;
  align?: HorizontalAlign;
  role: TextRole;
  size?: Size;
  color?: ColorToken;
}

export function Text(props: TextProps) {

  const { children, align, role, color } = props;
  const theme = useTheme();
  const style = Style(theme, align, role, color);

  return (
    <div style={style}>
      {children}
    </div>
  )
}

function Style(theme: Theme, textAlign: HorizontalAlign | undefined, role: TextRole, color: ColorToken | undefined): CSSProperties {
  const { fontSize, letterSpacing, lineHeight, fontWeight, fontFamily, fontStyle, textTransform } = theme.typography[role]
  return {
    color: theme.colors[color as ColorToken | 'on-background'],
    fontSize,
    letterSpacing,
    textAlign,
    textTransform,
    lineHeight: lineHeight + 'px',
    fontFamily,
    fontStyle,
    fontWeight: FontWeightMap[fontWeight as FontWeight]
  }
}

