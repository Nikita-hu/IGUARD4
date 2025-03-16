import React, { useState, useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const [height, setHeight] = useState(550);

  useEffect(() => {
    const minHeight = 550;
    const itemHeight = 50;
    const newHeight = minHeight + (props.children.length * itemHeight);
    setHeight(newHeight > minHeight ? newHeight : minHeight);
  }, [props.children.length]);

  const style = {
    border: '2px solid #91ff35',
    padding: '20px',
    width: '300px',
    height: `${height}px`,
    borderColor: '2px solid green',
    backgroundColor: isOver ? 'rgba(118, 118, 118, 0.5)' : 'transparent',
    overflowY: 'auto',
    position: 'relative',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}