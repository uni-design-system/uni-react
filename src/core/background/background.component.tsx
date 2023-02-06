import React, { CSSProperties, ReactNode } from 'react';
import { useTheme } from '../theme';
import { Theme } from '@uni-design-system/uni-core';
import { Property } from 'csstype';

interface BackgroundProps {
  children?: ReactNode;
  image?: Property.BackgroundImage | undefined;
  gradiant?: Property.BackgroundImage | undefined;
}

export const Background = ({ children, image, gradiant }: BackgroundProps): JSX.Element => {
  const theme = useTheme();
  const style = BackgroundStyle({ theme, image, gradiant });

  return <div style={style}>{children}</div>;
};

function BackgroundStyle({ image, gradiant, theme }: BackgroundProps & { theme: Theme }): CSSProperties {
  return {
    backgroundColor: theme.colors.background,
    backgroundImage: image || gradiant,
  };
}
