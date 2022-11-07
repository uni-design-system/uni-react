import { ReactNode } from 'react';
import { ImageFit } from '../image/image.types';

export interface OverlayProps {
  children?: ReactNode;
  blurPx?: number;
  hueRotateDeg?: number;
  hueDeg?: number;
  saturation?: number;
  lightness?: number;
  transparency?: number;
  isOpen?: boolean;
  fadeDuration?: number;
  imageUrl?: string;
  imageFit?: ImageFit;
}
