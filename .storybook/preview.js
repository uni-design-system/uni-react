import {ThemeProvider} from "../src/core/theme/theme.provider";
import {BuiltInThemes} from "@uni-design-system/uni-core";
import {addDecorator} from "@storybook/react";
import React from "react";
import {withThemes} from "@react-theming/storybook-addon/dist/preview";

const providerFn = ({theme, children}) => {
  return <ThemeProvider themeId={theme.id} themes={BuiltInThemes}>{children}</ThemeProvider>;
};

addDecorator(withThemes(null, [BuiltInThemes.LightTheme, BuiltInThemes.DarkTheme], { providerFn }));


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
