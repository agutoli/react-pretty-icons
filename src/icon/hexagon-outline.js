import React from 'react';
import iconSvg from '../icons/normalized/hexagon-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hexagon-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender