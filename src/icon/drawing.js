import React from 'react';
import iconSvg from '../icons/normalized/drawing.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__drawing" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender