import React from 'react';
import { LightTheme, Theme } from '@uni-design-system/uni-core';

export interface ThemeContextProps {
  themeId?: string;
  themes?: Record<string, Theme>;
  switchTheme: (themeId: string) => void;
}

const ThemeContext = React.createContext<ThemeContextProps>({
  themeId: 'LightTheme',
  themes: { LightTheme },
  switchTheme: () => {},
});

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

export default ThemeContext;
