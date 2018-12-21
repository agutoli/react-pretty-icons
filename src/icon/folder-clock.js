import React from 'react';
import iconSvg from '../icons/normalized/folder-clock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-clock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender