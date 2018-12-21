import React from 'react';
import iconSvg from '../icons/normalized/video-input-component.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-input-component" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender