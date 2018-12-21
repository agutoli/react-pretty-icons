import React from 'react';
import iconSvg from '../icons/normalized/video-4k-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-4k-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender