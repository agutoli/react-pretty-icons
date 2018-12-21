import React from 'react';
import iconSvg from '../icons/normalized/music-note-eighth.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__music-note-eighth" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender