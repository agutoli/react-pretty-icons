import React from 'react';
import iconSvg from '../icons/normalized/seat-flat.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__seat-flat" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender