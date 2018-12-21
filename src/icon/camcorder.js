import React from 'react';
import iconSvg from '../icons/normalized/camcorder.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camcorder" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender