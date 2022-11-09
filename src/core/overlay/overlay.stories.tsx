import React from 'react';
import { Overlay } from './overlay.component';
import { OverlayProps } from './overlay.model';
import { imageArgTypes } from '../image/image.argTypes';

export default {
  title: 'Core/Overlay',
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
    ...imageArgTypes,
  },
};

export const OverlayPlayground = (args: OverlayProps) => <Overlay {...args} />;

const OverlayPlaygroundProps: Partial<OverlayProps> = {
  hueDeg: 180,
  saturation: 100,
  lightness: 50,
  transparency: 0.25,
  blurPx: 2,
  hueRotateDeg: 120,
  isOpen: true,
  fit: 'contain',
  url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-108784-e569415749457a65514cfe8b509d7ead8b7b4013.jpg?w=500',
};

OverlayPlayground.args = OverlayPlaygroundProps;
