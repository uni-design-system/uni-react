import React from 'react';
import { ImageProps } from './image.model';
import { ImageStyle } from './image.config';

export const Image = ({ url, alt, opacity = 1, fit = 'cover' }: ImageProps): JSX.Element | null => {
  return url ? <img src={url} alt={alt} style={ImageStyle({ fit, opacity })} /> : null;
};
