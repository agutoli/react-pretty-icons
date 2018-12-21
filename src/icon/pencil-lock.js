import React from 'react';
import iconSvg from '../icons/normalized/pencil-lock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pencil-lock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender