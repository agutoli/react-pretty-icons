import React from 'react';
import iconSvg from '../icons/normalized/stairs.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__stairs" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender