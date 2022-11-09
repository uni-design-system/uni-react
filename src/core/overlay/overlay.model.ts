import { ReactNode } from 'react';
import { ImageProps } from '../image/image.model';

export interface OverlayProps extends ImageProps {
  children?: ReactNode;
  blurPx?: number;
  hueRotateDeg?: number;
  hueDeg?: number;
  saturation?: number;
  lightness?: number;
  transparency?: number;
  isOpen?: boolean;
  fadeDuration?: number;
}
