import React from 'react';
import iconSvg from '../icons/normalized/play-speed.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__play-speed" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender