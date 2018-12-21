import React from 'react';
import iconSvg from '../icons/normalized/karaoke-microphone-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__karaoke-microphone-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender