import React from 'react';
import iconSvg from '../icons/normalized/timer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__timer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender