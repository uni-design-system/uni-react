import React, { CSSProperties, ReactNode } from 'react';
import useTheme from '../../core/theme/theme.hook';
import { Text } from '../../core/text/text.component';
import { Theme } from '@uni-design-system/uni-core';

export interface ButtonProps {
  children: ReactNode,
  disabled?: boolean
}

export function Button({ children, disabled = false }: ButtonProps): JSX.Element {

  const theme = useTheme();
  const style = Style(theme);

  return (
    <button disabled={disabled} style={style}>
      <Text align="center" role="button" color="on-primary">
        {children}
      </Text>
    </button>
  )
}

function Style(theme: Theme): CSSProperties {
  return {
    backgroundColor: theme.colors['primary']
  }
}
