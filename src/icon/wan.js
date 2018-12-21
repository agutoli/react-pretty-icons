import React from 'react';
import iconSvg from '../icons/normalized/wan.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wan" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender