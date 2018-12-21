import React from 'react';
import iconSvg from '../icons/normalized/restore.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__restore" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender