import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import zIndex from '@mui/material/styles/zIndex';

// export function Draggable(props) {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: props.id,
//   });

//   const style = {
//     transform: CSS.Translate.toString(transform),
// };

//   return (
//     <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
//       {props.children}
//     </div>
//   );
// }
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