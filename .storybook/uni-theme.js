import { create } from '@storybook/theming';
import { default as brandImage } from './uni-storybook-logo.png'

export default create({
  base: 'light',
  brandTitle: 'UNI Design System',
  brandUrl: 'https://github.com/uni-design-system',
  brandImage,

  appBg: 'white'
});
