import React from 'react';
import iconSvg from '../icons/normalized/gauge-full.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gauge-full" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender