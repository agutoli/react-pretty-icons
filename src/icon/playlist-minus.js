import React from 'react';
import iconSvg from '../icons/normalized/playlist-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__playlist-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender