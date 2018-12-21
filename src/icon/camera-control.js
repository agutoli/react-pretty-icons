import React from 'react';
import iconSvg from '../icons/normalized/camera-control.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-control" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender