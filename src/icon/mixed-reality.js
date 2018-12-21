import React from 'react';
import iconSvg from '../icons/normalized/mixed-reality.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__mixed-reality" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender