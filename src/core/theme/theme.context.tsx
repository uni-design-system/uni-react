import React from 'react';
import { ThemeProps } from '@uni-design-system/uni-core';

const ThemeContext = React.createContext<ThemeProps>({});

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

export default ThemeContext;
