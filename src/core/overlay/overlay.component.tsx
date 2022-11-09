import React from 'react';

import { OverlayStyle } from './overlay.config';
import { useTheme } from '../theme';
import { OverlayProps } from './overlay.model';
import { Image } from '../image/image.component';

export interface ModalOverlayProps {
  children?: React.ReactNode;
}

export const Overlay = (props: OverlayProps): JSX.Element | null => {
  const { isOpen, url, fit, opacity } = props;
  const theme = useTheme();
  const overlayStyle = OverlayStyle(theme, props);

  return isOpen ? (
    <div>
      <Image url={url} fit={fit} opacity={opacity} />
      <div style={{ ...overlayStyle }}>{props.children}</div>
    </div>
  ) : null;
};
