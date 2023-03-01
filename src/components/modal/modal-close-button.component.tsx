import React, { CSSProperties, PropsWithChildren } from 'react';
import { Button, ButtonProps } from '../button';

export const ModalCloseButton = ({ ...rest }: PropsWithChildren<ButtonProps>): JSX.Element => {
  const style: CSSProperties = {
    position: 'absolute',
    top: '8px',
    right: '8px',
    padding: '8px',
  };

  return <Button useRipple={false} buttonType="icon" iconName="xMark" style={style} {...rest} />;
};
