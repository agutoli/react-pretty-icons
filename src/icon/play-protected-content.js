import React from 'react';
import iconSvg from '../icons/normalized/play-protected-content.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__play-protected-content" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender