import React from 'react';
import iconSvg from '../icons/normalized/video-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender