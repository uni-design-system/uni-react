import * as React from 'react';
import { Fade, FadeProps } from './fade.component';
import { useToggle } from '../../hooks';
import { Button, Card } from '../../../components';
import { Text } from '../../text';

export default {
  title: 'Components / Transition / Fade',
};

const Example = (props: FadeProps) => {
  const [open, { toggle }] = useToggle(false);
  return (
    <>
      <Button onClick={toggle}>Toggle Fade</Button>
      <Fade
        in={open}
        {...props}
        style={{
          maxWidth: 400,
          paddingTop: 20,
          ...props.style,
        }}
      >
        <Card cardType="elevated" colorToken="background">
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        </Card>
      </Fade>
    </>
  );
};

export const Basic = () => <Example />;

export const WithCustomTransition = () => (
  <Example transition={{ enter: { duration: 0.3 }, exit: { duration: 0.5 } }} />
);

export const WithTransitionEnd = () => (
  <Example style={{ display: 'block' }} transitionEnd={{ exit: { display: 'none' } }} />
);

export const WithTransitionDelay = () => <Example delay={{ enter: 0.2 }} />;
