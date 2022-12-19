import React from 'react';
import { ColorPicker, ColorPickerProps } from './color-picker.component';

export default {
  title: 'Tools/Color Picker',
  component: ColorPicker,
  parameters: {
    layout: 'fullscreen',
  },
};

export const ColorPickerPlayground = (args: ColorPickerProps) => <ColorPicker {...args} />;

const ColorPickerPlaygroundProps: Partial<ColorPickerProps> = {
  imageUrl: 'static/media/.storybook/uni-storybook-logo.png',
};

ColorPickerPlayground.args = ColorPickerPlaygroundProps;
