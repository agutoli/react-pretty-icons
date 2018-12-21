import React from 'react';
import iconSvg from '../icons/normalized/video.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender