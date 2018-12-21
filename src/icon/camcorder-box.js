import React from 'react';
import iconSvg from '../icons/normalized/camcorder-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camcorder-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender