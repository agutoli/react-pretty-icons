import React from 'react';
import iconSvg from '../icons/normalized/shopping-music.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shopping-music" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender