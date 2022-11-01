import React from 'react';

import { OverlayStyle } from './overlay.config';
import { useTheme } from '../../../core';
import { OverlayProps } from './overlay.model';

export const Overlay = (overlayProps: OverlayProps) => {
  const theme = useTheme();
  const style = OverlayStyle(theme, overlayProps);

  return <div style={style}>{overlayProps.children}</div>;
};
