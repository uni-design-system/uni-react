import React, {CSSProperties, ReactNode} from 'react';

export interface ContainerProps {
  children: ReactNode;
  style: CSSProperties;
}

export default function Container({ children, style, ...rest }: ContainerProps) {

  return (
    <div style={style} {...rest}>
      {children}
    </div>
  )
}
