import { ThemeProvider } from '../src/core/theme/theme.provider';
import { BuiltInThemes } from '@uni-design-system/uni-core';
import { addDecorator } from '@storybook/react';
import React from 'react';
import { withThemes } from '@react-theming/storybook-addon/dist/preview';
import { LayoutProvider } from '../src/core/layout/layout.provider';

const providerFn = ({ theme, children }) => {
  return (
    <LayoutProvider>
      <ThemeProvider themeId={theme.id} themes={BuiltInThemes}>
        {children}
      </ThemeProvider>
    </LayoutProvider>
  );
};

const Themes = [BuiltInThemes.LightTheme, BuiltInThemes.DarkTheme, BuiltInThemes.SquareTheme];

addDecorator(withThemes(null, Themes, { providerFn }));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
