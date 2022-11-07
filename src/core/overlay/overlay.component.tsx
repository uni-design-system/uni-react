import React from 'react';

import { OverlayStyle } from './overlay.config';
import { useTheme } from '../theme';
import { OverlayProps } from './overlay.model';
import { Image } from '../image/image.component';

export const Overlay = (props: OverlayProps): JSX.Element | null => {
  const { isOpen, imageUrl, imageFit } = props;
  const theme = useTheme();
  const overlayStyle = OverlayStyle(theme, props);

  return isOpen ? (
    <div>
      <Image url={imageUrl} fit={imageFit} />
      <div style={{ ...overlayStyle }}>{props.children}</div>
    </div>
  ) : null;
};
