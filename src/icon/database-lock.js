import React from 'react';
import iconSvg from '../icons/normalized/database-lock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__database-lock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender