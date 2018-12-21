import React from 'react';
import iconSvg from '../icons/normalized/file-restore.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-restore" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender