import React from 'react';
import iconSvg from '../icons/normalized/arrow-down-drop-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-down-drop-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender