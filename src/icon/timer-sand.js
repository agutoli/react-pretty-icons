import React from 'react';
import iconSvg from '../icons/normalized/timer-sand.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__timer-sand" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender