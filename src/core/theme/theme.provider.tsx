import React, { useState, useEffect } from 'react';
import { Theme, DefaultThemeId } from '@uni-design-system/uni-core';
import ThemeContext from './theme.context';

const STORAGE_KEY = 'THEME_ID';

interface ThemeProviderProps {
  themeId: string;
  themes: Record<string, Theme>;
  children?: React.ReactChild;
}

export const ThemeProvider = ({ children, themeId, themes }: ThemeProviderProps) => {

  const [_themeId, setThemeId] = useState<string>(themeId);

  useEffect(() => {
    (async () => {
      const id = localStorage.getItem(STORAGE_KEY);
      if (id) {
        setThemeId(id);
      } else {
        setThemeId(DefaultThemeId);
      }
    })();
  }, []);

  return (
    <ThemeContext.Provider value={{themeId, themes}}>
      {_themeId ? children : null}
    </ThemeContext.Provider>
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
