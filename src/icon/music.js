import React from 'react';
import iconSvg from '../icons/normalized/music.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__music" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender