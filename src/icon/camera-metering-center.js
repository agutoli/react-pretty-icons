import React from 'react';
import iconSvg from '../icons/normalized/camera-metering-center.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-metering-center" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender