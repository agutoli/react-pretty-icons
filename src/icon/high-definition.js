import React from 'react';
import iconSvg from '../icons/normalized/high-definition.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__high-definition" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender