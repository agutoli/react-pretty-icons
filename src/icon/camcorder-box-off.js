import React from 'react';
import iconSvg from '../icons/normalized/camcorder-box-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camcorder-box-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender