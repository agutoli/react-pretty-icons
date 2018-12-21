import React from 'react';
import iconSvg from '../icons/normalized/window-restore.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__window-restore" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender