import React from 'react';
import iconSvg from '../icons/normalized/metronome.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__metronome" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender