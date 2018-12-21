import React from 'react';
import iconSvg from '../icons/normalized/folder-clock-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-clock-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender