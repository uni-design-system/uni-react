import { Border, ColorToken, getValue, Theme } from '@uni-design-system/uni-core';
import { CSSProperties } from 'react';

export function BorderStyle(border: Border | undefined, theme: Theme): CSSProperties {

  if (!border) return { };

  const borderTopColor = extractColor(theme, border, 'colorTop');
  const borderBottomColor = extractColor(theme, border, 'colorBottom');
  const borderLeftColor = extractColor(theme, border, 'colorLeft');
  const borderRightColor = extractColor(theme, border, 'colorRight');
  const borderTopWidth = getValue(border, 'widthTop', 'widthAll');
  const borderBottomWidth = getValue(border, 'widthBottom', 'widthAll');
  const borderLeftWidth = getValue(border, 'widthLeft', 'widthAll');
  const borderRightWidth = getValue(border, 'widthRight', 'widthAll');

  return {
    borderTopColor,
    borderBottomColor,
    borderLeftColor,
    borderRightColor,
    borderTopWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth
  }
}

function extractColor(theme: Theme, border: Border, key: string): string {
  return theme.colors[getValue(border, key, 'colorAll') as ColorToken];
}
