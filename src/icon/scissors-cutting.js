import React from 'react';
import iconSvg from '../icons/normalized/scissors-cutting.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__scissors-cutting" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender