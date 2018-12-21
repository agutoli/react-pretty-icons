import React from 'react';
import iconSvg from '../icons/normalized/hexagon-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hexagon-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender