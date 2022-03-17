import React, { CSSProperties, ReactNode } from 'react';
import useTheme from '../theme/theme.hook';
import { FontWeight, FontWeightMap, HorizontalAlign, Size, TextRole, Theme } from '@uni-design-system/uni-core';

export interface TextProps {
  children: ReactNode;
  align: HorizontalAlign;
  role: TextRole;
  size: Size;
}

export function Text(props: TextProps) {

  const { children, align, role } = props;
  const theme = useTheme();
  const style = Style(theme, align, role);

  return (
    <div style={style}>
      {children}
    </div>
  )
}

function Style(theme: Theme, textAlign: HorizontalAlign, role: TextRole): CSSProperties {
  const { fontSize, letterSpacing, lineHeight, fontWeight } = theme.typography[role]
  return {
    fontSize,
    letterSpacing,
    textAlign,
    lineHeight,
    fontWeight: FontWeightMap[fontWeight as FontWeight]
  }
}
