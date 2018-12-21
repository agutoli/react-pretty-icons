import React from 'react';
import iconSvg from '../icons/normalized/arrow-right-drop-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-right-drop-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender