import React from 'react';
import iconSvg from '../icons/normalized/flashlight-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flashlight-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender