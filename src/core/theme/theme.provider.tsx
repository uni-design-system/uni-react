import React, { useEffect, useState } from 'react';
import { Theme } from '@uni-design-system/uni-core';
import ThemeContext from './theme.context';

const STORAGE_KEY = 'THEME_ID';

interface ThemeProviderProps {
  themeId?: string;
  themes?: Record<string, Theme>;
  children?: React.ReactChild;
}

export const ThemeProvider = ({ children, themeId, themes }: ThemeProviderProps) => {
  const [_themeId, setThemeId] = useState<string | undefined>(themeId);

  useEffect(() => {
    (async () => {
      const id = localStorage.getItem(STORAGE_KEY);
      setThemeId(id || themeId);
    })();
  }, [themeId]);

  return (
    <ThemeContext.Provider value={{ themeId: _themeId, themes, switchTheme: setThemeId }}>
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
