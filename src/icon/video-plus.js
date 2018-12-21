import React from 'react';
import iconSvg from '../icons/normalized/video-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender