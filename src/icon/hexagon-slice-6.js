import React from 'react';
import iconSvg from '../icons/normalized/hexagon-slice-6.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hexagon-slice-6" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender