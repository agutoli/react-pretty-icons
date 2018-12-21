import React from 'react';
import iconSvg from '../icons/normalized/polaroid.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__polaroid" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender