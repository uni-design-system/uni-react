import { CSSProperties } from 'react';
import { ImageProps } from './image.model';
import { FilterStyle } from '../filter/filter.style';

export const ImageStyle = (props: Partial<ImageProps>): CSSProperties => {
  const { fit, opacity, height, width, ...rest } = props;

  const filter = FilterStyle({ ...rest });

  const objectFit = height || width ? {} : { objectFit: fit };

  return {
    ...objectFit,
    width: (width && `${width}px`) || '100vw',
    height: (height && `${height}px`) || '100vh',
    opacity,
    ...filter,
  };
};

/*

.blur {filter: blur(4px);}
.brightness {filter: brightness(250%);}
.contrast {filter: contrast(180%);}
.grayscale {filter: grayscale(100%);}
.huerotate {filter: hue-rotate(180deg);}
.invert {filter: invert(100%);}
.opacity {filter: opacity(50%);}
.saturate {filter: saturate(7);}
.sepia {filter: sepia(100%);}
.shadow {filter: drop-shadow(8px 8px 10px green);}

* */
