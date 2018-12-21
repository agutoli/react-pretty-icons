import React from 'react';
import iconSvg from '../icons/normalized/video-input-svideo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-input-svideo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender