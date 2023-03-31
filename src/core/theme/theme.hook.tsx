import React, { useContext, useState } from 'react';
import ThemeContext from './theme.context';
import { BaseTheme, DefaultThemeId, Theme, ThemeProps } from '@uni-design-system/uni-core';

const findTheme = (props: ThemeProps): Theme => {
  const { themeId, themes } = props;
  return themes && themeId ? themes[themeId] : BaseTheme;
};

export const useTheme = (): Theme => {
  const themeProps = useContext(ThemeContext);

  const theme = findTheme(themeProps);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  // return theme || LightTheme;
  return theme;
};

export const useSwitchTheme = (defaultThemeId?: string): [string, (themeId?: string) => void] => {
  const [themeId, setThemeId] = useState<string>(defaultThemeId || DefaultThemeId);

  const switchTheme = (themeId?: string) => {
    if (!themeId) return;
    setThemeId(themeId);
  };

  return [themeId, switchTheme];
};
