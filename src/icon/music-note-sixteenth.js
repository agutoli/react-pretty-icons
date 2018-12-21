import React from 'react';
import iconSvg from '../icons/normalized/music-note-sixteenth.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__music-note-sixteenth" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender