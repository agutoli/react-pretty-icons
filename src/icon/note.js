import React from 'react';
import iconSvg from '../icons/normalized/note.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__note" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender