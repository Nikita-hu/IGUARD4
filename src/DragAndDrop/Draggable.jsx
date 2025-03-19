import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: props.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 999 : "auto",
    PointerEvents: 'auto',
    position: 'relative',
  

  };

  return (
    <div ref={setNodeRef} style={style}>
      <div {...listeners} {...attributes} >
        {props.children}
      </div>
    </div>

  );
}