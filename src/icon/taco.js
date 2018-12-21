import React from 'react';
import iconSvg from '../icons/normalized/taco.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__taco" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender