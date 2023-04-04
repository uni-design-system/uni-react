import React, { useContext, useEffect } from 'react';
import ThemeContext from './theme.context';
import { BaseTheme, Theme } from '@uni-design-system/uni-core';

export const useTheme = (): Theme => {
  const { themeId, themes } = useContext(ThemeContext);

  let theme = themes && themeId ? themes[themeId] : BaseTheme;

  useEffect(() => {}, [themeId]);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  useEffect(() => {
    console.log(themeId);
    theme = themes && themeId ? themes[themeId] : BaseTheme;
  }, [themeId]);

  // return theme || LightTheme;
  return theme;
};

export const useSwitchTheme = (): { switchTheme: (themeId: string) => void } => {
  const { switchTheme } = useContext(ThemeContext);

  return { switchTheme };
};
