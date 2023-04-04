import { createTheming } from '@callstack/react-theme-provider';
import { LightTheme, Theme } from '@uni-design-system/uni-core';

export const { ThemeProvider, withTheme, useTheme } = createTheming<Theme>(LightTheme);
