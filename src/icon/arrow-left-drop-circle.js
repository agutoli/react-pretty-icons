import React from 'react';
import iconSvg from '../icons/normalized/arrow-left-drop-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-left-drop-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender