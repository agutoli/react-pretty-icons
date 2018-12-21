import React from 'react';
import iconSvg from '../icons/normalized/cursor.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cursor" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender