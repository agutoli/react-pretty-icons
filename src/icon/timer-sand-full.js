import React from 'react';
import iconSvg from '../icons/normalized/timer-sand-full.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__timer-sand-full" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender