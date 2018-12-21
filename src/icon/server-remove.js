import React from 'react';
import iconSvg from '../icons/normalized/server-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__server-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender