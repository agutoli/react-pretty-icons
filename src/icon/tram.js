import React from 'react';
import iconSvg from '../icons/normalized/tram.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tram" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender