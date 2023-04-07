import React from 'react';
import { Background, BackgroundProps } from './background.component';

export default {
  title: 'Components/Background',
  component: Background,
};

export const ImageBackground = (args: BackgroundProps) => {
  return <Background {...args} />;
};

const BackgroundPlaygroundArgs: BackgroundProps = {
  image: `url(${'promenade.webp'})`,
  size: 'cover',
  minHeight: '100vh',
};

ImageBackground.args = BackgroundPlaygroundArgs;
