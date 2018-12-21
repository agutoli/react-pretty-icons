import React from 'react';
import iconSvg from '../icons/normalized/av-timer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__av-timer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender