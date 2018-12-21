import React from 'react';
import iconSvg from '../icons/normalized/contrast-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__contrast-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender