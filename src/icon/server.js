import React from 'react';
import iconSvg from '../icons/normalized/server.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__server" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender