import React from 'react';
import iconSvg from '../icons/normalized/playlist-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__playlist-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender