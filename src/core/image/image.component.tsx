import React from 'react';
import { ImageProps } from './image.model';
import { ImageStyle } from './image.style';

export const Image = ({ url, alt, opacity = 1, fit = 'cover', ...rest }: ImageProps): JSX.Element | null => {
  return url ? <img src={url} alt={alt} style={ImageStyle({ fit, opacity, ...rest })} /> : null;
};
