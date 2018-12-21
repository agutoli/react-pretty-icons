import React from 'react';
import iconSvg from '../icons/normalized/traffic-light.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__traffic-light" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender