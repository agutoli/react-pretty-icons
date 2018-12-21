import React from 'react';
import iconSvg from '../icons/normalized/gauge-low.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gauge-low" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender