import React from 'react';
import iconSvg from '../icons/normalized/rhombus-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rhombus-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender