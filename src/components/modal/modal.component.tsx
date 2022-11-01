import React, { ReactNode } from 'react';
import { Overlay } from './overlay';
import { Card } from '../card';
import { Text } from '../../core';

type ModalSize = 'sm' | 'md' | 'lg';

const ModalSizes: Record<ModalSize, number> = {
  sm: 260,
  md: 320,
  lg: 500,
};

export interface ModalProps {
  size: ModalSize;
  children: ReactNode;
}

export const Modal = ({ children, size = 'lg' }: ModalProps) => {
  return (
    <>
      <Overlay>
        <Card colorToken="background" width={ModalSizes[size]} cardType="elevated" elevation="modal">
          <Text role="title-medium">Modal Header</Text>
          {children}
        </Card>
      </Overlay>
    </>
  );
};
