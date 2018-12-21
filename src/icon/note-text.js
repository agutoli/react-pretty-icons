import React from 'react';
import iconSvg from '../icons/normalized/note-text.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__note-text" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender