import React from 'react';
import iconSvg from '../icons/normalized/play-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__play-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender