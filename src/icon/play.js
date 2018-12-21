import React from 'react';
import iconSvg from '../icons/normalized/play.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__play" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender