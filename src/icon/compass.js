import React from 'react';
import iconSvg from '../icons/normalized/compass.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__compass" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender