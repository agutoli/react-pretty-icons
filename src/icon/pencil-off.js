import React from 'react';
import iconSvg from '../icons/normalized/pencil-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pencil-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender