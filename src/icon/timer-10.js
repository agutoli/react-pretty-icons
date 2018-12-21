import React from 'react';
import iconSvg from '../icons/normalized/timer-10.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__timer-10" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender