import React from 'react';
import iconSvg from '../icons/normalized/xbox.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__xbox" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender