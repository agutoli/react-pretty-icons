import React from 'react';
import iconSvg from '../icons/normalized/server-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__server-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender