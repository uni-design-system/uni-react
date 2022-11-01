import React from 'react';
import { Overlay } from './overlay.component';
import { OverlayProps } from './overlay.model';
import sampleimage from '../../../../.storybook/favicon/apple-touch-icon.png';

export default {
  title: 'Components/Modal/Overlay',
  component: Overlay,
  argTypes: {
    hueDeg: {
      control: { type: 'range', min: 0, max: 360, step: 1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      description: 'The hue in degrees.',
    },

    saturation: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      description: 'A number from 1-100 to define the color saturation percentage.',
    },

    lightness: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      description: 'A number from 1-100 to define the color lightness percentage.',
    },

    transparency: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0.5' },
      },
      description: 'A decimal of 1 to define the color lightness percentage.',
    },

    blurPx: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      description: 'The amount of blur defined in pixels.',
    },

    hueRotateDeg: {
      control: { type: 'range', min: 0, max: 360, step: 1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      description: 'The hue in degrees.',
    },
  },
};

export const OverlayPlayground = (args: OverlayProps) => (
  <>
    <img src={sampleimage} />
    <Overlay {...args} />
  </>
);

const OverlayPlaygroundProps: Partial<OverlayProps> = {
  hueDeg: 0,
  saturation: 0,
  lightness: 0,
  transparency: 0.5,
  blurPx: 0,
  hueRotateDeg: 0,
};

OverlayPlayground.args = OverlayPlaygroundProps;
