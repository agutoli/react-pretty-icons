import React from 'react';
import iconSvg from '../icons/normalized/video-input-hdmi.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-input-hdmi" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender