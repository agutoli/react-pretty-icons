import React from 'react';
import iconSvg from '../icons/normalized/video-3d.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-3d" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender