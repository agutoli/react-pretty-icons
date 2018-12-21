import React from 'react';
import iconSvg from '../icons/normalized/pencil-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pencil-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender