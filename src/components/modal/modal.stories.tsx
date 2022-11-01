import React from 'react';
import { Modal, ModalProps } from './modal.component';
import { Text } from '../../core';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Basic = (args: ModalProps) => (
  <Modal {...args}>
    <Text role="body-1-short">This is a simple modal component.</Text>
  </Modal>
);
