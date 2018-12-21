import React from 'react';
import iconSvg from '../icons/normalized/pencil-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pencil-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender