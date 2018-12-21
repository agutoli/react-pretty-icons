import React from 'react';
import iconSvg from '../icons/normalized/marker.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__marker" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender