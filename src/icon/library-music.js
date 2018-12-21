import React from 'react';
import iconSvg from '../icons/normalized/library-music.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__library-music" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender