import React from 'react';
import iconSvg from '../icons/normalized/video-player-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-player-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender