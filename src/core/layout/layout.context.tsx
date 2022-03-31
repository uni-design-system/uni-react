import React from 'react';
import { Size } from '@uni-design-system/uni-core';

export interface Layout {
  deviseSize: Size;
  orientation: 'portrait' | 'landscape';
}

const LayoutContext = React.createContext({});

if (process.env.NODE_ENV !== 'production') {
  LayoutContext.displayName = 'LayoutContext';
}

export default LayoutContext;
