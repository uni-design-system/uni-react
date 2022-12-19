import { motion } from 'framer-motion';
import React, { CSSProperties, useState } from 'react';
import { RoleHues, Size } from '@uni-design-system/uni-core';

export interface SwitchProps {
  size: Size;
}

export const SwitchConfigs: Record<Size, { radius: number; padding: number }> = {
  xs: {
    radius: 6,
    padding: 2,
  },
  sm: {
    radius: 8,
    padding: 2,
  },
  md: {
    radius: 10,
    padding: 3,
  },
  lg: {
    radius: 12,
    padding: 4,
  },
  xl: {
    radius: 14,
    padding: 5,
  },
};

export const Switch = ({ size = 'sm' }: SwitchProps) => {
  const [isOn, setIsOn] = useState(false);

  const successColor = `hsl(${RoleHues.success.default}, 32%, 50%)`;

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  const config = SwitchConfigs[size];

  const handleDiameter = `${config.radius * 2}px`;
  const switchWidth = `${config.radius * 4}px`;

  const switchStyle: CSSProperties = {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: isOn ? 'flex-end' : 'flex-start',
    backgroundColor: isOn ? successColor : 'rgba(0, 0, 0, 0.4)',
    width: switchWidth,
    height: handleDiameter,
    padding: `${config.padding}px`,
    borderRadius: `${config.radius + config.padding}px`,
  };

  const handleStyle: CSSProperties = {
    width: handleDiameter,
    height: handleDiameter,
    backgroundColor: 'white',
    borderRadius: `${config.radius}px`,
  };

  return (
    <div style={switchStyle} className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div style={handleStyle} className="handle" layout transition={spring} />
    </div>
  );
};
