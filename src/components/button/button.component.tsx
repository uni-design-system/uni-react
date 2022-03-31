import React, { CSSProperties, ReactNode } from 'react';
import useTheme from '../../core/theme/theme.hook';
import { Text } from '../../core/text/text.component';
import {
  Theme,
  ButtonType,
  ColorToken,
  Size,
  ShadowElevation,
  IconToken, ContentColorToken
} from '@uni-design-system/uni-core';
import { BorderStyle } from '../../core/border/border.style';
import { IconTextRow } from '../icon-text-row/icon-text-row.component';
import { BoxShadow } from '../../core/shadow/shadow.style';

export interface ButtonProps {
  text?: string;
  children?: ReactNode;
  buttonType: ButtonType;
  disabled?: boolean;
  size: Size;
  elevation?: ShadowElevation;
  iconName?: IconToken;
}

export function Button({ text, children, buttonType, size, disabled = false, elevation, iconName }: ButtonProps): JSX.Element {

  const theme = useTheme();
  const style = Style(theme, buttonType, size, elevation);

  const textColor = `on-${theme.buttons[buttonType].color}` as ContentColorToken;

  return (
    <button disabled={disabled} style={style}>
      {
        iconName ?
          <IconTextRow iconName={iconName} color={textColor} textRole="button">
            { text || children }
          </IconTextRow>
          :
          <Text align="center" role="button" color={textColor}>
            { text || children }
          </Text>
      }
    </button>
  )
}


function Style(theme: Theme, buttonType: ButtonType, size: Size = 'md', elevation: ShadowElevation | undefined): CSSProperties {

  const { borderRadius, color, horizontalPadding, verticalPadding,
    border, borderColor, borderWidth, shadowElevation } = theme.buttons[buttonType];

  const vp = verticalPadding[size];
  const hp = horizontalPadding[size];

  const styles: CSSProperties = {
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    paddingTop: vp + 'px',
    paddingBottom: vp + 'px',
    paddingLeft: hp + 'px',
    paddingRight: hp + 'px',
    borderRadius: borderRadius + 'px',
    backgroundColor: theme.colors[color],
    borderColor: theme.colors[borderColor as ColorToken],
    borderWidth: borderWidth + 'px',
    ...BorderStyle(border, theme)
  }

  if (!border && !borderWidth) {
    styles.border = 'none';
  }

  if (shadowElevation) {
    styles.boxShadow = BoxShadow(elevation || shadowElevation);
  }

  return styles;
}
