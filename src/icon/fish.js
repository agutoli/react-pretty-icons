import React from 'react';
import iconSvg from '../icons/normalized/fish.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fish" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender