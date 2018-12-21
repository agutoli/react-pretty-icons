import React from 'react';
import iconSvg from '../icons/normalized/video-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender