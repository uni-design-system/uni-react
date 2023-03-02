import React, { CSSProperties, ForwardedRef, forwardRef, ReactNode, useEffect, useState } from 'react';
import { createRipple, BoxShadow, Text, useTheme } from '../../core';
import { Theme, ButtonType, ColorToken, Size, ContentColorToken } from '@uni-design-system/uni-core';
import { IconTextRow } from '../icon-text-row/icon-text-row.component';
import useLayout from '../../core/layout/layout.hook';
import { IconName } from '../../core/icon';

export interface ButtonProps {
  text?: string;
  children?: ReactNode;
  buttonType?: ButtonType;
  disabled?: boolean;
  iconName?: IconName;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  useRipple?: boolean;
  style?: CSSProperties;
}

export const Button = forwardRef(
  (
    {
      text,
      children,
      buttonType = 'filled',
      disabled = false,
      iconName,
      onClick,
      useRipple = true,
      style: userStyle,
      ...rest
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ): JSX.Element => {
    const { deviceSize } = useLayout();
    const theme = useTheme();
    const buttonProps = theme.buttons[buttonType];

    const getOnColorToken = (color: ColorToken) => `on-${color}` as ContentColorToken;
    const defaultContentColor = getOnColorToken(buttonProps.color);

    const [hover, setHover] = useState<boolean>(false);
    const [click, setClick] = useState<boolean>(false);
    const [contentColor, setContentColor] = useState<ContentColorToken>(defaultContentColor);

    const style = Style(theme, buttonType, deviceSize, hover, disabled, click, useRipple);

    useEffect(() => {
      setContentColor(getOnColorToken(disabled ? 'inverse-on-surface' : buttonProps.color));
    }, [disabled]);

    useEffect(() => {
      setTimeout(() => {
        setClick(false);
      }, 250);
    }, [click]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      useRipple && createRipple(event);
      setClick(true);
      onClick && onClick(event);
    };

    return (
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
        disabled={disabled}
        style={{ ...style, ...userStyle }}
        ref={ref}
        {...rest}
      >
        {iconName ? (
          <IconTextRow iconName={iconName} color={contentColor} textRole="button">
            {text || children}
          </IconTextRow>
        ) : (
          <Text align="center" role="button" color={contentColor}>
            {text || children}
          </Text>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

function Style(
  theme: Theme,
  buttonType: ButtonType,
  size: Size = 'md',
  hover: boolean,
  disabled: boolean,
  click: boolean,
  useRipple: boolean,
): CSSProperties {
  const { color, horizontalPadding, verticalPadding, borderColor, borderWidth, borderRadius, contentColor } =
    theme.buttons[buttonType];

  const styles: CSSProperties = {
    position: useRipple ? 'relative' : undefined,
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    cursor: 'pointer',
    paddingTop: verticalPadding[size] + 'px',
    paddingBottom: verticalPadding[size] + 'px',
    paddingLeft: horizontalPadding[size] + 'px',
    paddingRight: horizontalPadding[size] + 'px',
    borderRadius: borderRadius + 'px',
    backgroundColor: theme.colors[color],
    borderColor: theme.colors[borderColor as ColorToken],
    borderWidth: borderWidth + 'px',
    borderStyle: buttonType === 'outlined' ? 'solid' : 'none',
  };

  if (buttonType === 'elevated' && !disabled) {
    styles.boxShadow = BoxShadow(hover ? 'focussed' : 'raised');
  }

  if (disabled && buttonType === 'elevated') {
    styles.boxShadow = BoxShadow('pressed');
    styles.color = theme.colors[contentColor];
  }

  if (disabled) {
    styles.cursor = 'not-allowed';
  }

  if (click && buttonType === 'elevated' && !disabled) {
    styles.boxShadow = BoxShadow('pressed');
  }

  return styles;
}
