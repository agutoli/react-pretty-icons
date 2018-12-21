import React from 'react';
import iconSvg from '../icons/normalized/note-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__note-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender