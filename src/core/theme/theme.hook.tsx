import { useContext, useDebugValue, useState } from 'react';
import ThemeContext from './theme.context';
import { BaseTheme, Theme, ThemeProps } from '@uni-design-system/uni-core';

const findTheme = (props: ThemeProps): Theme => {
  const { themeId, themes } = props;
  return themes && themeId ? themes[themeId] : BaseTheme;
};

export function useTheme() {
  const context = useContext(ThemeContext);
  const [theme, setTheme] = useState(findTheme(context));

  const switchTheme = (themeId: string) => {
    setTheme(context.themes ? context.themes[themeId] : BaseTheme);
  };

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDebugValue(theme);
  }

  return { ...theme, switchTheme };
}
