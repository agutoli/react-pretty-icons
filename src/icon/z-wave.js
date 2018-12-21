import React from 'react';
import iconSvg from '../icons/normalized/z-wave.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__z-wave" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender