import React, { ReactNode } from 'react';
import { Card } from '../card';
import { Text, Overlay } from '../../core';

type ModalSize = 'sm' | 'md' | 'lg';

const ModalSizes: Record<ModalSize, number> = {
  sm: 260,
  md: 320,
  lg: 500,
};

export interface ModalProps {
  size: ModalSize;
  children: ReactNode;
  isOpen: boolean;
}

export interface ModalOverlayProps {
  children?: React.ReactNode;
  fadeDuration?: number;
}

export const Modal = ({ children, isOpen, size = 'lg' }: ModalProps) => {
  return (
    <>
      <Overlay isOpen={isOpen}>
        <Card colorToken="background" width={ModalSizes[size]} cardType="elevated" elevation="modal">
          <Text role="title-medium">Modal Header</Text>
          {children}
        </Card>
      </Overlay>
    </>
  );
};