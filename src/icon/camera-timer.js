import React from 'react';
import iconSvg from '../icons/normalized/camera-timer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-timer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender