import React from 'react';
import iconSvg from '../icons/normalized/contrast-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__contrast-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender