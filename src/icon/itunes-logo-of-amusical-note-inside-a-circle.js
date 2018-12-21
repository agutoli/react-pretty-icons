import React from 'react';
import iconSvg from '../icons/normalized/itunes-logo-of-amusical-note-inside-a-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__itunes-logo-of-amusical-note-inside-a-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender