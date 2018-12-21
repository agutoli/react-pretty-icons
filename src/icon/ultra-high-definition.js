import React from 'react';
import iconSvg from '../icons/normalized/ultra-high-definition.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ultra-high-definition" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender