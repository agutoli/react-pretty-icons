import React from 'react';
import iconSvg from '../icons/normalized/raspberrypi.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__raspberrypi" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender