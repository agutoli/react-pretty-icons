import React from 'react';
import iconSvg from '../icons/normalized/crosshairs.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__crosshairs" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender