import React, { useState } from 'react';
import { Modal, ModalProps } from './modal.component';
import { Text } from '../../core';
import { Button } from '../button';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Basic = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal {...args} isOpen={isOpen}>
        <Button buttonType="icon" iconName="xmarkSolid" onClick={() => setIsOpen(false)} />
        <Text role="body-1-short">This is a simple modal component.</Text>
      </Modal>
    </>
  );
};
