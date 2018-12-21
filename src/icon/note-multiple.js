import React from 'react';
import iconSvg from '../icons/normalized/note-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__note-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender