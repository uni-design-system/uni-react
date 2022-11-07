import { CSSProperties } from 'react';
import { ImageProps } from './image.model';

export const ImageStyle = ({ fit }: Partial<ImageProps>): CSSProperties => {
  return {
    objectFit: fit,
    width: '100vw',
    height: '100vh',
  };
};
