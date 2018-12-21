import React from 'react';
import iconSvg from '../icons/normalized/gauge.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gauge" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender