import React from 'react';
import iconSvg from '../icons/normalized/video-stabilization.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-stabilization" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender