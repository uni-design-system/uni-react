export const imageArgTypes = {
  url: {
    control: { type: 'text' },
    table: { summary: 'string' },
  },
  fit: {
    options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    control: { type: 'inline-radio' },
    table: {
      type: { summary: 'string literal' },
      defaultValue: { summary: 'cover' },
    },
  },
  opacity: {
    control: { type: 'range', min: 0, max: 1, step: 0.01 },
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: '1' },
    },
    description: 'A decimal of 1 to define the color lightness percentage.',
  },
};
