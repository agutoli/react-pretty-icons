import React from 'react';
import iconSvg from '../icons/normalized/polymer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__polymer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender