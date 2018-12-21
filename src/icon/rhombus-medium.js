import React from 'react';
import iconSvg from '../icons/normalized/rhombus-medium.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rhombus-medium" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender