import React from 'react';
import iconSvg from '../icons/normalized/cup-water.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cup-water" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender