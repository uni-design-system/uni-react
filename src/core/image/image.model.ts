import { ImageFit } from './image.types';

export interface ImageProps {
  url?: string | undefined;
  alt?: string;
  fit?: ImageFit;
  opacity?: number;
}
