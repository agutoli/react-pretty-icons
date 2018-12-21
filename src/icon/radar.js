import React from 'react';
import iconSvg from '../icons/normalized/radar.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__radar" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender