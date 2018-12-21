import React from 'react';
import iconSvg from '../icons/normalized/play-box-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__play-box-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender