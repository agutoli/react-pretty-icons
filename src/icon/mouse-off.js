import React from 'react';
import iconSvg from '../icons/normalized/mouse-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__mouse-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender