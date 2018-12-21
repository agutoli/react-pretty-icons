import React from 'react';
import iconSvg from '../icons/normalized/stop.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__stop" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender