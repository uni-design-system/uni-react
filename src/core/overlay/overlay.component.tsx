import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { OverlayStyle } from './overlay.config';
import { useTheme } from '../theme';
import { OverlayProps } from './overlay.model';
import { Image } from '../image/image.component';

export interface ModalOverlayProps {
  children?: React.ReactNode;
  fadeDuration?: number;
}

export const Overlay = (props: OverlayProps): JSX.Element => {
  const { isOpen, url, fit, opacity, fadeDuration = 0.35 } = props;
  const theme = useTheme();
  const overlayStyle = OverlayStyle(theme, props);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeDuration }}
        >
          <Image url={url} fit={fit} opacity={opacity} />
          <div style={{ ...overlayStyle }}>{props.children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
