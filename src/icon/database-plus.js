import React from 'react';
import iconSvg from '../icons/normalized/database-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__database-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender