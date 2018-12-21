import React from 'react';
import iconSvg from '../icons/normalized/video-image.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-image" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender