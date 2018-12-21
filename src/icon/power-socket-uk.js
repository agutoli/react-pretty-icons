import React from 'react';
import iconSvg from '../icons/normalized/power-socket-uk.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__power-socket-uk" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender