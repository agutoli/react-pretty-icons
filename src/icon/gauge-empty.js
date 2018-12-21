import React from 'react';
import iconSvg from '../icons/normalized/gauge-empty.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gauge-empty" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender