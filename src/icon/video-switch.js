import React from 'react';
import iconSvg from '../icons/normalized/video-switch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-switch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender