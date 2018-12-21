import React from 'react';
import iconSvg from '../icons/normalized/file-music.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-music" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender