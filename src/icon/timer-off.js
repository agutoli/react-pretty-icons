import React from 'react';
import iconSvg from '../icons/normalized/timer-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__timer-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender