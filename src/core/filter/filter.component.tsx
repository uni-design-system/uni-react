import React, { ReactNode } from 'react';
import Container from '../container/container.component';
import { FilterStyle } from './filter.style';
import { FilterConfig } from './filter.model';

interface FilterProps {
  children: ReactNode;
  filters: FilterConfig[];
}

export const Filter = (filterProps: FilterProps) => {
  const { children } = filterProps;
  const style = FilterStyle(filterProps);

  return <Container style={style}>{children}</Container>;
};
