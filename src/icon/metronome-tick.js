import React from 'react';
import iconSvg from '../icons/normalized/metronome-tick.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__metronome-tick" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender