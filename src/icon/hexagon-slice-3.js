import React from 'react';
import iconSvg from '../icons/normalized/hexagon-slice-3.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hexagon-slice-3" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender