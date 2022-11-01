import React, { ReactNode } from 'react';

import { OverlayStyle } from './overlay.config';
import { useTheme } from '../../../core';

export interface OverlayProps {
  children?: ReactNode;
  blurPx: number;
  hueRotateDeg: number;
  hueDeg: number;
  saturation: number;
  lightness: number;
  transparency: number;
}

export const Overlay = (overlayProps: OverlayProps) => {
  const theme = useTheme();
  const style = OverlayStyle(theme, overlayProps);

  return <div style={style} />;
};
