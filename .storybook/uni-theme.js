import { create } from '@storybook/theming';
import { default as brandImage } from './uni-storybook-logo.png'

export default create({
  base: 'light',
  brandTitle: 'UNI Design System',
  brandUrl: 'https://uni-design-system.github.io/uni-react/',
  brandImage,

  appBg: 'white'
});
