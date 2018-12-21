import React from 'react';
import iconSvg from '../icons/normalized/stop-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__stop-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender