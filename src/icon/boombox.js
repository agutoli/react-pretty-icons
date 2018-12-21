import React from 'react';
import iconSvg from '../icons/normalized/boombox.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__boombox" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender