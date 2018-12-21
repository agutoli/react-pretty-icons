import React from 'react';
import iconSvg from '../icons/normalized/screen-rotation.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__screen-rotation" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender