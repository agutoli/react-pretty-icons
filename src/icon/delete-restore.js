import React from 'react';
import iconSvg from '../icons/normalized/delete-restore.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__delete-restore" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender