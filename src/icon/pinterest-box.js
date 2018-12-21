import React from 'react';
import iconSvg from '../icons/normalized/pinterest-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pinterest-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender