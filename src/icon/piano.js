import React from 'react';
import iconSvg from '../icons/normalized/piano.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__piano" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender