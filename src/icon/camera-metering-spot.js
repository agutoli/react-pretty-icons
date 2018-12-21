import React from 'react';
import iconSvg from '../icons/normalized/camera-metering-spot.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-metering-spot" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender