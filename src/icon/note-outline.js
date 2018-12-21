import React from 'react';
import iconSvg from '../icons/normalized/note-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__note-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender