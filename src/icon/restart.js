import React from 'react';
import iconSvg from '../icons/normalized/restart.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__restart" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender