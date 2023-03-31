import React, { useEffect } from 'react';
import { Theme } from '@uni-design-system/uni-core';
import ThemeContext from './theme.context';
import { useSwitchTheme } from './theme.hook';

const STORAGE_KEY = 'THEME_ID';

interface ThemeProviderProps {
  themeId?: string;
  themes?: Record<string, Theme>;
  children?: React.ReactChild;
}

export const ThemeProvider = ({ children, themeId, themes }: ThemeProviderProps) => {
  const [_themeId, setThemeId] = useSwitchTheme(themeId);

  useEffect(() => {
    (async () => {
      const id = localStorage.getItem(STORAGE_KEY);
      setThemeId(id || themeId);
    })();
  }, [themeId]);

  return (
    <ThemeContext.Provider value={{ themeId: _themeId, themes }}>{_themeId ? children : null}</ThemeContext.Provider>
  );
};

/*export function withTheme(Component: ({children, theme, themes }: (any & ThemeProps)) => JSX.Element) {

  return (props: JSX.IntrinsicAttributes) => {
    const { themeId, setThemeId } = useContext(ThemeContext);

    const getTheme = (themeId: string) => themes[themeId];
    const setTheme = (themeId: string) => {
      localStorage.setItem(STORAGE_KEY, themeId);
      setThemeId(themeId);
    };

    return (
      <Component
        {...props}
        themes={Themes}
        theme={getTheme(themeId)}
        setTheme={setTheme}
      />
    );
  };
}*/
