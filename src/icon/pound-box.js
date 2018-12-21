import React from 'react';
import iconSvg from '../icons/normalized/pound-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pound-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender