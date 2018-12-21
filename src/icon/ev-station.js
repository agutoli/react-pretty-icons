import React from 'react';
import iconSvg from '../icons/normalized/ev-station.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ev-station" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender