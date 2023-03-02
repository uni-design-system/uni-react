import React, { useContext } from 'react';
import { SortableItemContext } from '../SortableItem/sortableItem.context';
import { Button, ButtonProps } from '../../../../button';
import { useDndContext } from '@dnd-kit/core';

export const DragHandle = ({ ...rest }: ButtonProps): JSX.Element => {
  const { attributes, listeners, ref } = useContext(SortableItemContext);
  const dndContext = useDndContext();

  return (
    <Button
      style={{ cursor: dndContext.activatorEvent ? 'grabbing' : 'grab' }}
      iconName="bars3"
      buttonType="icon"
      {...attributes}
      {...listeners}
      ref={ref}
      {...rest}
    />
  );
};
