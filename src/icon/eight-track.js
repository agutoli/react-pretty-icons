import React from 'react';
import iconSvg from '../icons/normalized/eight-track.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__eight-track" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender