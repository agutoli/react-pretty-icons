import React from 'react';
import iconSvg from '../icons/normalized/database.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__database" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender