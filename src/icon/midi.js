import React from 'react';
import iconSvg from '../icons/normalized/midi.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__midi" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender