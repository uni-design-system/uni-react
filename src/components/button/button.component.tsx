import React, { CSSProperties, ReactNode } from 'react';
import useTheme from '../../core/theme/theme.hook';
import { Text } from '../../core/text/text.component';
import {
  Theme,
  ButtonType,
  ColorToken,
  Size,
  ShadowMap,
  ShadowElevation,
  IconToken, ContentColorToken
} from '@uni-design-system/uni-core';
import { BorderStyle } from '../../core/border/border.style';
import { IconTextRow } from '../icon-text-row/icon-text-row.component';

export interface ButtonProps {
  text?: string;
  children?: ReactNode,
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


function Style(theme: Theme, buttonType: ButtonType, size: Size, elevation: ShadowElevation | undefined): CSSProperties {

  const { borderRadius, color, horizontalPadding, horizontalPaddings, verticalPadding, verticalPaddings,
    border, borderColor, borderWidth, shadowElevation } = theme.buttons[buttonType];

  const vp = !size || !verticalPaddings ? verticalPadding : verticalPaddings[size];
  const hp = !size || !horizontalPaddings ? horizontalPadding : horizontalPaddings[size];

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
    const shadowDef = ShadowMap[elevation || shadowElevation];

    const umbra = `0 ${shadowDef.umbra.offset}px ${shadowDef.umbra.blur}px rgba(0,0,0,0.${shadowDef.umbra.opacity})`;
    const penumbra = `0 ${shadowDef.penumbra.offset}px ${shadowDef.penumbra.blur}px rgba(0,0,0,0.${shadowDef.penumbra.opacity})`;

    styles.boxShadow = [umbra, penumbra].join(', '); // '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';  //[umbra, penumbra, ambient].join(', ');
  }


  return styles;
}
